import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../App';
import cron from 'node-cron';
import { getTopPosts } from './getHNData';

const PORT = process.env.PORT || 3006;
const app = express();
const indexFile = path.resolve('./public/index.html');

function job() {
  const templateFile = path.resolve('./public/htmlTemplate.html');

  fs.readFile(templateFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return;
    }

    getTopPosts()
      .then((posts) => {
        const app = ReactDOMServer.renderToString(
          <App topPostsFromServer={posts} />
        );

        // console.log(JSON.stringify(posts, null, 2));

        console.log(app);

        const renderedPage = data.replace(
          '<div id="root"></div>',
          `<div id="root">${app}</div>`
        );

        fs.writeFile(indexFile, renderedPage, (err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });
}

job();

// cron.schedule('*/15 * * * *', job).start();

app.get('/', (_, res) => {
  return res.sendFile(indexFile);
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

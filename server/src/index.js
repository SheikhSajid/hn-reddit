import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import 'ignore-styles'; // Ignore CSS imports in components

import App from '../../client/src/App';
// import cron from 'node-cron';
import { getTopPosts } from './getHNData';

const PORT = process.env.PORT || 3006;
const app = express();
const outputPath = path.resolve('../build/index.html');

function job() {
  const outputFromReact = path.resolve('../../client/build/index.html');

  fs.readFile(outputFromReact, 'utf8', (err, data) => {
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

        fs.writeFile(outputPath, renderedPage, (err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });
}

job();

// cron.schedule('*/15 * * * *', job).start();

app.get('/', (_, res) => {
  return res.sendFile(outputPath);
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

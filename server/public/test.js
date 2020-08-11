var _path = _interopRequireDefault(require('path'));

var _fs = _interopRequireDefault(require('fs'));

var _react = _interopRequireDefault(require('react'));

var _express = _interopRequireDefault(require('express'));

var _server = _interopRequireDefault(require('react-dom/server'));

require('ignore-styles');

var _App = _interopRequireDefault(require('../src/App'));

var _getHNData = require('./getHNData');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Ignore CSS imports in components
// import cron from 'node-cron';
var PORT = process.env.PORT || 3006;
var app = (0, _express.default)();

var indexFile = _path.default.resolve('./public/index.html');

function job() {
  var templateFile = _path.default.resolve('./public/htmlTemplate.html');

  _fs.default.readFile(templateFile, 'utf8', function (err, data) {
    if (err) {
      console.error('Something went wrong:', err);
      return;
    }

    (0, _getHNData.getTopPosts)()
      .then(function (posts) {
        var app = _server.default.renderToString(
          /*#__PURE__*/ _react.default.createElement(_App.default, {
            topPostsFromServer: posts,
          })
        ); // console.log(JSON.stringify(posts, null, 2));

        console.log(app);
        var renderedPage = data.replace(
          '<div id="root"></div>',
          '<div id="root">'.concat(app, '</div>')
        );

        _fs.default.writeFile(indexFile, renderedPage, function (err) {
          return console.error(err);
        });
      })
      .catch(function (err) {
        return console.error(err);
      });
  });
}

job(); // cron.schedule('*/15 * * * *', job).start();

app.get('/', function (_, res) {
  return res.sendFile(indexFile);
});
app.use(_express.default.static('./build'));
app.listen(PORT, function () {
  console.log('Server is listening on port '.concat(PORT));
});

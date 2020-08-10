const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      // {
      //   test: /\.css$/i,
      //   exclude: path.resolve('./src'),
      // },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /.css$/i,
    }),
  ],
};

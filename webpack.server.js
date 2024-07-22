const path = require('path');
const isomorphicStyleLoader = require('isomorphic-style-loader');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './server/index.js', 
  mode: 'development',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          isomorphicStyleLoader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [isomorphicStyleLoader, 'css-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
};

const path = require('path');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [{
      test: /\.css/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.jsx?$/,
      loader: ['babel-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

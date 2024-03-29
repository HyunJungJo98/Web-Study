const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  // output: './dist/bundle.js' 와 같음
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname + '/dist'),
  },
  mode: 'none',
  module: {
    rules: [
      // scss 번역
      {
        test: /\.scss$/,
        // 뒤에서부터 적용
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // css 번역
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};

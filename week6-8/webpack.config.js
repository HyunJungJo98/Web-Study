const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // output: './dist/bundle.js' 와 같음
    filename: 'main.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: './dist/',
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    compress: true,
    static: {
      directory: path.join(__dirname),
      serveIndex: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
          },
        },
      },
    ],
  },
};

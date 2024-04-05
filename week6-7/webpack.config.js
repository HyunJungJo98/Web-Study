const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // output: './dist/bundle.js' 와 같음
    filename: 'main.js',
    path: path.resolve(__dirname + '/dist'),
  },
  devServer: {
    port: 8080,
    hot: true,
    compress: true,
    devMiddleware: {
      publicPath: '/dist',
    },
    static: {
      directory: path.join(__dirname),
      serveIndex: true,
    },
  },
};

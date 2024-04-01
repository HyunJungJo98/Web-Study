const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // output: './dist/bundle.js' 와 같음
    filename: 'main.js',
    path: path.resolve(__dirname + '/dist'),
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 3000,
    ignored: /node_modules/,
    poll: true,
  },
};

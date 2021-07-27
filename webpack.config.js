const path = require('path');
const AsyncImportPlugin = require('./async-import-plugin.js')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[contenthash].js',
    clean: true
  },
  plugins: [
    new AsyncImportPlugin()
  ]
};
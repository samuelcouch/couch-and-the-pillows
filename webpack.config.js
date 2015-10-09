var path        = require('path');
var webpack     = require('webpack');

var PORT        = 2999;
var SRC_PATH    = path.join(__dirname, 'client', 'src');
var BUILD_PATH  = path.join(__dirname, 'client', 'dist');

module.exports = {
  quiet:    true,
  context:  SRC_PATH,
  entry:    [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    path.join(SRC_PATH, 'main.js')
  ],

  resolve:  {
    root:       SRC_PATH,
    extensions: ['', '.js', '.jsx']
  },

  output:   {
    publicPath: 'http://127.0.0.1:2999/static/',
    path:       BUILD_PATH,
    filename:   'app.js'
  },

  module:   {
    loaders:  [
      {
        test:     /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader:   'url-loader?limit=100000'
      },
      {
        test:     /\.css$/,
        loaders:  ['style', 'css']
      },
      {
        test:     /\.scss$/,
        loaders:  ['style', 'css', 'sass?&includePaths[]=' + encodeURIComponent(SRC_PATH)]
      },
      {
        test:     /\.jsx?$/,
        exclude:  /node_modules/,
        loader:   'react-hot'
      },
      {
        test:     /\.jsx?$/,
        exclude:  /node_modules/,
        loader:   'babel',
        query:    {
          optional: [
            'runtime',
            'es7.asyncFunctions',
            'es7.decorators',
            'es7.classProperties'
          ]
        }
      }
    ]
  }
};

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    amplify: './src/index.js',
    vendor: 'request'
  },
  output: {
    path: path.join(__dirname,'dist'),
    publicPath: '/dist',
    filename: '[name].js'
  },

  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: '/node_modules',
        use: {
    loader: 'babel-loader',
    options: {
         presets: ['env']
      }
     }
    }
     ]
   },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}

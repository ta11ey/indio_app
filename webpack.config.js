var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', "react", "es2015",  "stage-0"],
            plugins: [
              require('babel-plugin-transform-object-rest-spread', 'transform-decorators-legacy')
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
		    test: /\.svg/,
		    use: {
		        loader: 'svg-url-loader',
		    }
			}
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true
    })
  ],
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
    publicPath: '/dist/'
  },
}

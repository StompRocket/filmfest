const path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {

    loaders: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader', {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 55
            },
        // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false
            }

          }
        }
      ]
    }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  }
}

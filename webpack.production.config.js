var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    webpack = require('webpack');

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].[chunkhash].js'
  },
  mode: "production",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'src/'),
      "~components": path.resolve(__dirname, 'src/components/'),
      "~modules": path.resolve(__dirname, 'src/modules/'),
      "~pages": path.resolve(__dirname, 'src/pages/'),
      "~util": path.resolve(__dirname, 'src/util/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './build-templates/index.html.ejs',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};
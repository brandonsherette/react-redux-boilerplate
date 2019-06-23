var path = require('path');

module.exports = {
  devtool: "inline-sourcemap",
  entry: ["babel-polyfill", "./src/index.js"],
  mode: "development",
  output: {
    path: __dirname + "/public/",
    filename: "main.js"
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'src/'),
      "~components": path.resolve(__dirname, 'src/components/'),
      "~modules": path.resolve(__dirname, 'src/modules/'),
      "~pages": path.resolve(__dirname, 'src/pages/'),
      "~util": path.resolve(__dirname, 'src/util/'),
    }
  },
  plugins: [],
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
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
      }
    ]
  }
};
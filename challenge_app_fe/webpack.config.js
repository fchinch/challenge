// const path = require('path');
//
// module.exports = {
//   entry: path.resolve(__dirname,'./src/index.js'), // Entry point of your application
//   mode: 'development',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, './public'), // Output directory
//     publicPath: '/' // Public URL for assets
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       }
//     ]
//   },
//   devServer: {
//     static: path.resolve(__dirname, './dist'), // Directory to serve files from
//     port: 9011,
//   }
// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 9012,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
const { merge } = require("webpack-merge"); 
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    module: {
      rules: [
        /*{
          test: /\.html$/,
          exclude: /node_modules/,
          loader: "html-loader",
        },*/
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ["style-loader",
            {   loader: "css-loader",
                options: {
                    modules: {
                        exportLocalsConvention: "camelCase",
                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
                        localIdentContext: path.resolve(__dirname, "src/components"),
                    },
                }
            },
            "sass-loader"],
        },
        /*{
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },*/
      ],
    },
    plugins: [
      new Dotenv({
        path: "./dev.env",
      }),
    ],
    devtool: "eval-source-map",
    stats: "errors-only",
    devServer: {
      port: "8081",
    },
  });
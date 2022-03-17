const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

//const path = require("path");

module.exports = merge( common, {
    mode: "production",
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
          use: [MiniCssExtractPlugin.loader,
            {loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
              },
            }
            },
              "sass-loader"],
        },
        /*{
          test: /\.(png|jpg)$/,
          type: "asset/resource",
        },*/
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[id].css",
      }),
      new Dotenv({
        path: "./prod.env",
      }),
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
  });
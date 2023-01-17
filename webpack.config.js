/**
 * * Webpack configuration.
 */

 const path = require("path");
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
 const TerserPlugin = require("terser-webpack-plugin");
 
 const JS_DIR = path.resolve(__dirname, "src/js");
 const SASS_DIR = path.resolve(__dirname, "src/scss");
 const BUILD_DIR = path.resolve(__dirname, "assets");
 
 const entry = {
   script: JS_DIR + "/index.js",
   style: SASS_DIR + "/index.scss",
 };
 
 const output = {
   path: BUILD_DIR,
   filename: "[name].js",
 };
 
 const plugins = () => [
   new MiniCssExtractPlugin({
     filename: "[name].css",
   }),
 ];
 
 const rules = [
   {
     test: /\.js$/,
     include: [JS_DIR],
     exclude: /node_modules/,
     use: "babel-loader",
   },
   {
     test: /\.css$/i,
     use: ["style-loader", "css-loader"],
   },
   {
     test: /\.scss$/,
     exclude: /node_modules/,
     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
   }
 ];
 
 module.exports = () => ({
   entry: entry,
 
   output: output,
 
   //devtool: 'source-map',
 
   module: {
     rules: rules,
   },
 
   optimization: {
     minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
   },
 
   plugins: plugins(),
 });
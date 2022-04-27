const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const package = require("./package.json");

module.exports = {
  entry: { index: "./src/index.ts" },
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    clean: true,
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
      publicPath: "/",
    },
    port: 3003,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "process",
      filename: "remoteEntry.js",
      exposes: {
        "./bootstrap": "./src/bootstrap",
      },
      shared: {
        react: { eager: false, requiredVersion: package.dependencies.react },
        "react-dom": {
          eager: false,
          requiredVersion: package.dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      publicPath: "/",
      chunks: ["index"],
    }),
  ],
};

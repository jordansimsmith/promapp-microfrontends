const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const package = require("./package.json");

module.exports = {
  entry: "./src/index.ts",
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
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        process: "process@http://localhost:3001/remoteEntry.js",
        home: "home@http://localhost:3002/remoteEntry.js",
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
    }),
  ],
};

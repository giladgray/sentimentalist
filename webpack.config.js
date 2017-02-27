var path = require("path");
var webpack = require("webpack");

const { NODE_ENV } = process.env;

const SRC = path.resolve("./src");
const DEST = path.resolve("./dist");
const NAME = require("./package.json").name + ".js";

module.exports = {
  entry: [
    `${SRC}/index.tsx`,
  ],
  module: {
    loaders: [
      {
        include: SRC,
        loaders: ["react-hot", "ts-loader"],
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: NAME,
    path: DEST,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: `"${NODE_ENV}"` },
    }),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".ts", ".tsx"],
  },
  stats: {
    assets: true,
    chunks: false,
    errorDetails: true,
    hash: false,
    source: false,
    timings: true,
    version: false,
  },
};

if (NODE_ENV === "production") {
  // tslint:disable-next-line:no-console
  console.log("Optimizing for production...");
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }));
}

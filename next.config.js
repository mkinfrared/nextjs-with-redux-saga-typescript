require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]--[hash:base64:5]"
  },
  sassLoaderOptions: {
    includePaths: ["components/**", "pages/**"]
  },
  webpack(config) {
    // config.plugins.push(
    //   new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery"
    //   })
    // );
    return config;
  },
  env: {
    TMDB_MOVIE_KEY: process.env.TMDB_MOVIE_KEY,
    TMDB_IMAGE_URL: process.env.TMDB_IMAGE_URL
  }
});

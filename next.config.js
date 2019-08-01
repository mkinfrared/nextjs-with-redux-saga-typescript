require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");

module.exports = withSass({
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

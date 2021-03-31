const path = require("path");
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "jquery": "jquery",
      "window.jquery": "jquery",
      "$": "jquery",
      "window.$": "jquery"
    })
  ],

  entry: {
    main: "./src/js/index.js",
    /*article1: "./src/js/pages/article1.js",
    search_results: "./src/js/pages/search_results.js",
    registratsiya_kompanii: "./src/js/pages/registratsiya_kompanii.js",
    contacts: "./src/js/pages/contacts.js",
    expert_articles: "./src/js/pages/expert_articles.js"
    thank_you: "./src/js/pages/thank_you.js",
    business_school: "./src/js/pages/business_school.js",
    venture_capital: "./src/js/pages/venture_capital.js",
    venture_capital_online: "./src/js/pages/venture_capital_online.js",
    */

    doing_it: "./src/js/pages/doing_it.js",
    business_mission: "./src/js/pages/business_mission.js",
    doing_in_dubai_offline: "./src/js/pages/doing_in_dubai_offline.js",
    doing_in_dubai_online: "./src/js/pages/doing_in_dubai_online.js",
    doing_in_israel: "./src/js/pages/doing_in_israel.js",

    // minilends
    /*menu_services: "./src/js/pages/minilends/menu_services.js",
    minilends: "./src/js/pages/minilends/minilends.js",*/
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
              ["@babel/preset-env", { modules: false }]
            ]
          }
        }
      }
    ]
  },

  resolve: {
    alias: {
      "%block%": path.resolve(__dirname, "src/blocks"),
      "%baseJS%": path.resolve(__dirname, "src/js/base"),
      "%libsJS%": path.resolve(__dirname, "src/js/vendor/import"),
      "%baseCSS%": path.resolve(__dirname, "src/styles/base"),
      "%libsCSS%": path.resolve(__dirname, "src/styles/vendor/import"),
    }
  }
};

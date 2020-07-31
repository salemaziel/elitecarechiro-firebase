//'use strict';

//const siteConfig = require('./config.js');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
        {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyByN1o4Zl6033C0CllxBMx1ltArBvaU66E",
          authDomain: "elitecarechiropractic-9b4f3.firebaseapp.com",
          databaseURL: "https://elitecarechiropractic-9b4f3.firebaseio.com",
          projectId: "elitecarechiropractic-9b4f3",
          storageBucket: "elitecarechiropractic-9b4f3.appspot.com",
          messagingSenderId: "795647646039",
          appId: "1:795647646039:web:95640bc052d1ffc9e84612"
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};

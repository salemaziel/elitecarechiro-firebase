'use strict';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: `AIzaSyByN1o4Zl6033C0CllxBMx1ltArBvaU66E`,
          authDomain: `elitecarechiropractic-9b4f3.firebaseapp.com`,
          databaseURL: `https://elitecarechiropractic-9b4f3.firebaseio.com`,
          projectId: `elitecarechiropractic-9b4f3`,
          storageBucket: `elitecarechiropractic-9b4f3.appspot.com`,
          messagingSenderId: `795647646039`,
          appId: `1:795647646039:web:95640bc052d1ffc9e84612`,
        },
      },
    },
/*    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
        name: `data`,
      },
    },
*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elite Care Chiropractic`,
        short_name: `Elite Care Chiro`,
        start_url: `/`,
        background_color: `#0397d7`,
        theme_color: `#0397d7`,
        display: `minimal-ui`,
        icon: `static/logo/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://elitecare.salemaziel.design',
        sitemap: 'https://elitecare.salemaziel.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};

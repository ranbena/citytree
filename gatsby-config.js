// select env
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

// eslint-disable-next-line no-console
console.log(`Using environment config: '${activeEnv}'`);

// load .env config
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const path = require('path');

module.exports = {
  pathPrefix: process.env.GATSBY_PATH_PREFIX,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Assistant:300,400,600,700', 'Proza+Libre:400,700'],
        display: 'swap',
        subset: 'hebrew',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'ufv5pfo', // ranbena's "citytree.net" project id with "Adobe Hebrew" font
        },
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`, // directory with the strings JSON
        languages: ['he', 'en'],
        defaultLanguage: 'he',
        redirect: false,
      },
    },
  ],
};

// select env
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

// eslint-disable-next-line no-console
console.log(`Using environment config: '${activeEnv}'`);

// load .env config
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  pathPrefix: process.env.GATSBY_PATH_PREFIX,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-htaccess',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Assistant:200,300,400,600,700',
          'Proza+Libre:400,700',
          'Frank+Ruhl+Libre:300,400,500',
        ],
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
    'gatsby-plugin-client-side-redirect',
  ],
};

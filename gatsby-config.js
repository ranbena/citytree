module.exports = {
  pathPrefix: '/citytree', // for gh-pages
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Assistant:400,600,700'],
        display: 'swap',
        subset: 'hebrew',
      },
    },
  ],
};

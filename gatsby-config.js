module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `career`, path: `${__dirname}/src/content/careers` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
  ],
};

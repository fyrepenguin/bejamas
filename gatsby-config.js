require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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

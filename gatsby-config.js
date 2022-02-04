const path = require("path");
require('dotenv').config();
const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);
module.exports = {
  siteMetadata: {
      title: `blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  },
      {
          resolve: "gatsby-plugin-eslint",
          options: {
              rulePaths: [gatsbyRequiredRules],
              stages: ["develop"],
              extensions: ["js", "jsx", "ts", "tsx"],
              exclude: ["node_modules", "bower_components", ".cache", "public"],
          },
      },
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      "gatsby-plugin-sass",
      "gatsby-transformer-remark"
  ]
};
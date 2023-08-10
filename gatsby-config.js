/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'Gatsby testing site',
    description: 'Test description'
  },
  plugins: [{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/star-favicon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `blog`,
      path: `${__dirname}/blog`
    }
  }, 'gatsby-plugin-sass', 'gatsby-plugin-image', 'gatsby-plugin-sharp', 'gatsby-plugin-mdx'],
}

module.exports = {
  siteMetadata: {
    title: `Dot Dash | Web & Mobile Development, Design & Branding in Cincinnati`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
       trackingId: 'UA-17658948-19',
      },
   },
  ],
}

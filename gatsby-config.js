module.exports = {
  siteMetadata: {
    title: `teste`,
    description: "Curso de programação online para crianças e jovens entre 7 e 18 anos",
    author: `Colmeia`,
    siteUrl: 'https://jolly-shannon-bd2201.netlify.app/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jolly-shannon-bd2201`,
        short_name: `jolly-shannon-bd2201`,
        start_url: `/`,
        background_color: `#8A75EC`,
        theme_color: `#8A75EC`,
        display: `minimal-ui`,
        icon: `src/images/logo_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174228191-1",
        head: false,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "jolly-shannon-bd2201.netlify.app",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              id
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({site, allSitePage}) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    }
  ],
}

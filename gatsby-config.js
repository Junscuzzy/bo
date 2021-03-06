const siteDescription =
  'Official Bengale Studio website using gatsby & netlify-cms.'

module.exports = {
  siteMetadata: {
    title: 'Bengale Studio',
    shortTitle: 'BO',
    mail: 'bonjour@bengale.studio',
    description: siteDescription,
    author: `@Junscuzzy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/static/fonts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
        // eslint-disable-next-line
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              linkImagesToOriginal: false,
              quality: 90,
              // withWebp: true,
              // linkImagesToOriginal: false,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer'
            }
          }
        ],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              linkImagesToOriginal: false,
              quality: 90,
              // withWebp: true,
              // linkImagesToOriginal: false,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bengale Studio', // Alternative Site title for SEO
        short_name: 'bengale-studio',
        description: siteDescription,
        start_url: `/`,
        background_color: '#2b2e3c',
        theme_color: '#3498DB',
        display: 'standalone',
        icon: 'static/favicon.png'
      }
    },
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //     head: true,
    //     anonymize: true,
    //    exclude: ['/preview/**', '/do-not-track/me/too/']
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // modulePath: `path/to/custom/script.js`, // default: undefined
        // enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `Bengale Studio`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    `gatsby-plugin-netlify`
  ]
}

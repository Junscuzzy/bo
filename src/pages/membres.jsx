/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MembersSection from '../sections/members.section'

const MembersPage = ({ data }) => {
  const { members: baseMembers, images, site } = data
  const { title: siteName } = site.siteMetadata

  // Merge images into members list
  const members = baseMembers.edges.map(({ node }) => {
    const image = images.nodes.filter(({ absolutePath }) => {
      const stringToArr = absolutePath.split('/')
      const rest = stringToArr.splice(stringToArr.length - 2, 2)
      const filename = `/${rest.join('/')}`
      return filename === node.frontmatter.avatar
    })

    return {
      ...node,
      frontmatter: {
        ...node.frontmatter,
        avatar: image[0]
      }
    }
  })

  return (
    <Layout>
      <SEO title="L'équipe" />
      <MembersSection members={members} siteName={siteName} />
    </Layout>
  )
}

MembersPage.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }),
    members: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object)
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    })
  })
}

MembersPage.defaultProps = {
  data: {
    images: {
      nodes: []
    },
    members: {
      edges: []
    },
    site: {
      siteMetadata: {
        title: 'Bengale Studio'
      }
    }
  }
}

export default MembersPage

export const query = graphql`
  query getMembers {
    members: allMdx(filter: { fields: { slug: { regex: "//members//" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            avatar
            title
            firstname
            lastname
            mail
            profession
            professionCool
            bgColor
            color
            socialLinks {
              label
              link
            }
            skills {
              label
              link
            }
          }
          body
        }
      }
    }
    images: allFile(filter: { absolutePath: { regex: "//uploads//" } }) {
      nodes {
        absolutePath
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

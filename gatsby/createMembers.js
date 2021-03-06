const path = require(`path`)

/**
 * Create Members
 */
module.exports = async ({ actions, graphql, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { fields: { slug: { regex: "//members//" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createMembers" query')
  }

  // We'll call `createPage` for each result
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/member.jsx`),
      // We can use the values in this context in
      context: { id: node.id, layout: 'member' }
    })
  })
}

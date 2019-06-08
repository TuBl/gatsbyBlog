const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      //path to component we got previously
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      // object that contain stuff that we can pass down to the template [if it has slug it can fetch rest of the post data, eg title]
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

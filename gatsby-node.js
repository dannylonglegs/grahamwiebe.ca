const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPost = path.resolve(`./src/templates/project.js`)
  const result = await graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              slug
              id
              gallery {
                medium
                title
                year
                size
                image {
                  file {
                    url
                  }
                }
              }
              projectTitle
              projectText {
                projectText
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulProject.edges;
  console.log(posts)

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: projectPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

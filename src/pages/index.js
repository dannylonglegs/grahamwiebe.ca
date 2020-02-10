import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeGallery from "../components/content/gallery/homeGallery"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projectTitles = data.allContentfulProject.edges
    const homeContent = data.allContentfulHomeContent.edges[0]

    return (
      <Layout location={this.props.location} title={siteTitle} projects={projectTitles}>
        <SEO title="All posts" />
        <HomeGallery project={homeContent} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject {
      edges{
        node{
          projectTitle
          slug
        }
      }
    }
    allContentfulHomeContent {
      edges {
        node {
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
        }
      }
    }
  }
`

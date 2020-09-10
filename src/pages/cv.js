import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from "../components/content/richText"
import { rhythm } from "../utils/typography"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allContentfulProject.edges
    const cvData = data.allContentfulCvCvRichTextNode.nodes[0].cv

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        projects={projects}
      >
        <SEO title="All posts" />
        <div class="cv">
          <RichText content={cvData} />
        </div>
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
      edges {
        node {
          projectTitle
          slug
        }
      }
    }
    allContentfulCvCvRichTextNode {
      nodes {
        cv
      }
    }
  }
`

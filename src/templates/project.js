import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SingleImageGallery from "../components/content/gallery/singleImageGallery"

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const siteTitle = this.props.data.site.siteMetadata.title
    const projects = this.props.data.allContentfulProject.edges

    return (
      <Layout location={this.props.location} title={siteTitle} projects={projects} >
        <SEO
          title={project.projectTitle}
        />
        <SingleImageGallery project={project}/>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query projectBySlug($slug: String!) {
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
    contentfulProject(slug: { eq: $slug }) {
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
`

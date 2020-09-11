import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewGallery from "../components/content/gallery/gallery"
import RichText from "../components/content/richText"

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject
    const siteTitle = this.props.data.site.siteMetadata.title
    const projects = this.props.data.allContentfulProject.edges
    console.log(project, "project here")
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        projects={projects}
      >
        <SEO title={project.projectTitle} />
        {/* <SingleImageGallery project={project}/> */}
        <NewGallery project={project} />

        {project.projectText ? (
          <div class="project-description">
            <RichText content={project.projectText.projectText} />
          </div>
        ) : null}
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
      edges {
        node {
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
          fluid {
            srcSet
            sizes
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

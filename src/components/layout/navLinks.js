import React from "react"
import { Link } from "gatsby"

const NavLinks = props => {

  let links = props.projects.map(project => {
    return (
      <li>
        <Link to={project.node.slug}>{project.node.projectTitle}</Link>
      </li>
    )
  })

  return (
    <div class="nav-links">
      <ul>{links}</ul>
    </div>
  )
}

export default NavLinks

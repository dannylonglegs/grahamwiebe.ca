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
      <ul class="project-links">
        {links}
      </ul>
      <ul class="other-links">
        <li><Link to={"/cv"}>CV</Link></li>
      </ul>
    </div>
  )
}

export default NavLinks

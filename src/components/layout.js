import React from "react"
import Nav from "./layout/nav"

import "../styles/main.scss"

class Layout extends React.Component {
  render() {
    const { location, title, projects, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    
    return (
      <div class="layout">
        <Nav title={title} projects={projects} />
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout

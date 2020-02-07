import React from "react"
import { Link } from "gatsby"
import Nav from "./layout/nav"
import Footer from "./layout/footer"

import { rhythm, scale } from "../utils/typography"
import "../styles/main.scss"

class Layout extends React.Component {
  render() {
    const { location, title, projects, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    
    return (
      <div class="layout">
        <Nav title={title} projects={projects} />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Layout

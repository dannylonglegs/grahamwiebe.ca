import React from "react"
import Header from "./header"
import NavLinks from "./navLinks"

const Nav = props => {
  let projects = props.projects;

  return (
    <div id="nav">
        <Header title={props.title}/>
        <NavLinks projects={projects}/>
    </div>
  )
}

export default Nav
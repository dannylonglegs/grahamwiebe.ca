import React, { useState } from "react"
import Header from "./header"
import NavLinks from "./navLinks"

const Nav = props => {
  let projects = props.projects;
  const [dropdown, setDropdown] = useState(true);

  const dropdownClick = () => {
    if(dropdown === true ){
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  return (
    <div id="nav" >
      <div class="name-and-dropdown">
        <Header title={props.title}/>
        <button onClick={dropdownClick}class="drop-down-button"> ↓ </button>
      </div>
        
        <NavLinks dropdown={dropdown} projects={projects}/>
    </div>
  )
}

export default Nav
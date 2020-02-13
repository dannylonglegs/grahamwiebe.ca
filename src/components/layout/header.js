import React from "react"
import { Link } from "gatsby"

const Header = props => {
  return (
    <header class="header-title">
      <Link to="/">{props.title}</Link>
    </header>
  )
}

export default Header

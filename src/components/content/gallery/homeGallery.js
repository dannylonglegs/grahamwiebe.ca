import React, { useState } from "react"
import ImageWrapper from "../imageWrapper"

const HomeGallery = props => {
  let image = props.project.node.gallery[0]
  return (
    <React.Fragment>
        <ImageWrapper image={image}/>
    </React.Fragment>
  )
}
export default HomeGallery

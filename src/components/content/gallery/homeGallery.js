import React, { useState } from "react"
import ImageWrapper from "../imageWrapper"

const HomeGallery = props => {
  let image = props.project.node.gallery[0]
  return (
    <div class="home-gallery">
        <ImageWrapper image={image}/>
    </div>
  )
}
export default HomeGallery

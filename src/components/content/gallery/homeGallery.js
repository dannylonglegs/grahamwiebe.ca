import React, { useState } from "react"
// import ImageWrapper from "../imageWrapper"
import Img from "gatsby-image"

const HomeGallery = props => {
  let image = props.project.node.gallery[0]
  console.log(image, "image in home????")
  return (
    <div class="home-gallery">
      <img src={image.image.file.url} />
    </div>
  )
}
export default HomeGallery

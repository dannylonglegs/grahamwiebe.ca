import React, { useState } from "react"
import ImageWrapper from "../imageWrapper"

const ScrollGallery = props => {
  let images = <div> No images </div>

  if (props.project.gallery) {
    images = props.project.gallery.map((image, i) => {
      return <ImageWrapper image={image} />
    })
  }
  return (
    <div class="scroll-gallery">
       {images}
    </div>
  )
}
export default ScrollGallery

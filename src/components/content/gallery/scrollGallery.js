import React, { useState } from "react"
import ImageWrapper from "../imageWrapper"

const ScrollGallery = props => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const indexLimit = props.project.gallery.length - 1;
  let images = <div> No images </div>

//   const increaseIndex = () => {
//     if (currentIndex < indexLimit) {
//       setCurrentIndex(currentIndex + 1)
//     } else {
//       return null
//     }
//   }

//   const decreaseIndex = () => {
//     if (currentIndex === 0) {
//       return null
//     } else {
//       setCurrentIndex(currentIndex - 1)
//     }
//   }

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

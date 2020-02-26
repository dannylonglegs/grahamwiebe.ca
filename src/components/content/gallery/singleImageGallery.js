import React, { useState, useEffect } from "react"
import ImageWrapper from "../imageWrapper"
import RichText from "../richText"

const SingleImageGallery = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const indexLimit = props.project.gallery.length - 1
  let images = <div> No images </div>

  useEffect(() => {
    window.document.onkeydown = checkKey
  }, [checkKey])

  const increaseIndex = () => {
    if (currentIndex < indexLimit) {
      setCurrentIndex(currentIndex + 1)
    } else {
      return null
    }
  }

  const decreaseIndex = () => {
    if (currentIndex === 0) {
      return null
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function checkKey(e) {
    e = e || window.event
    if (e.keyCode == "37") {
      decreaseIndex()
    } else if (e.keyCode == "39") {
      increaseIndex()
    }
  }

  if (props.project.gallery) {
    images = props.project.gallery.map((image, i) => {
      return <ImageWrapper image={image} />
    })
  }
  return (
    <div class="single-image-gallery">
      <div class="image-and-nav">
        {images[currentIndex]}
        <div class="image-nav">
          <button
            onClick={decreaseIndex}
            disabled={currentIndex === 0 ? true : false}
          >
            {"<"}
          </button>
          <div class="counter">{currentIndex + 1 + "/" + (indexLimit + 1)}</div>
          <button
            onClick={increaseIndex}
            disabled={currentIndex === indexLimit ? true : false}
          >
            {">"}
          </button>
        </div>
      </div>
      <RichText content={props.project.projectText.projectText} />
    </div>
  )
}
export default SingleImageGallery

import React, { useState, useEffect } from "react"
import Image from "./image"
import ImageInfo from "./imageInfo"

const ImageWrapper = props => {
  const [showInfo, setShowInfo] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const toggleHover = () => {
    setShowInfo(!showInfo)
  }

  const checkImageLoad = () => {
    // setTimeout(() => {
    //   setLoaded(true)
    // }, 15000)
    setLoaded(true)
  }

  const checkIndex = () => {
    setLoaded(false)
  }

  useEffect(() => {
    return () => {
      checkIndex()
      checkImageLoad()
    }
  }, [props.currentIndex])

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      // class={"image-wrapper"}
      class={"image-wrapper " + (loaded ? "loaded" : "loading")}
    >
      <Image
        currentIndex={props.currentIndex}
        checkImageLoad={checkImageLoad}
        src={props.image.image.file.url}
      />
      <ImageInfo
        showInfo={showInfo}
        title={props.image.title ? props.image.title : ""}
        medium={props.image.medium ? props.image.medium : ""}
        year={props.image.year ? props.image.year : ""}
        size={props.image.size ? props.image.size : ""}
      />
    </div>
  )
}
export default ImageWrapper

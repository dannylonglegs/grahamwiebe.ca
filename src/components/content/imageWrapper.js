import React, { useState } from "react"
import Image from "./image"
import ImageInfo from "./imageInfo"

const ImageWrapper = props => {
  const [showInfo, setShowInfo] = useState(false)

  const toggleHover = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      class="image-wrapper"
    >
      <Image src={props.image.image.file.url} />
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

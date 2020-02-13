import React, { useState } from "react"
import Image from "./image"
import ImageInfo from "./imageInfo"

const ImageWrapper = props => {
  return (
    <div class="image-wrapper">
      <Image src={props.image.image.file.url} />
      <ImageInfo
        title={props.image.title ? props.image.title : ""}
        medium={props.image.medium ? props.image.medium : ""}
        year={props.image.year ? props.image.year : ""}
        size={props.image.size ? props.image.size : ""}
      />
    </div>
  )
}
export default ImageWrapper

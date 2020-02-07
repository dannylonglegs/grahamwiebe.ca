import React, { useState } from "react"
import Image from "./image"
import ImageInfo from "./imageInfo"

const ImageWrapper = props => {
  let medium = props.image.medium
  let title = props.image.title
  let year = props.image.year
  let size = props.image.size
  let src = props.image.image.file.url

  return (
    <div class="image-wrapper">
      <Image src={src} />
      <ImageInfo title={title} medium={medium} year={year} size={size} />
    </div>
  )
}
export default ImageWrapper

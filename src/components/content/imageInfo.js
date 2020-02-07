import React from "react"

const ImageInfo = props => {
  return <div class="image-info">
      <p class="title">{props.title}</p>
      <p class="year">{props.year}</p>
      <p class="medium">{props.medium}</p>
      <p class="size">{props.size}</p>
  </div>
}
export default ImageInfo
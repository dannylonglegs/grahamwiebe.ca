import React from "react"

const ImageInfo = props => {
  return <div class={ props.showInfo ? "image-info show" : "image-info"}>
      <p class="title">{props.title}, <span class="year">{props.year}</span></p>
      <p class="medium">{props.medium}</p>
      <p class="size">{props.size}</p>
  </div>
}
export default ImageInfo
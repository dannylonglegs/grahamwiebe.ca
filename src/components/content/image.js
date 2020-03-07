import React from "react"

const Image = props => {

  return (
      <img
        src={props.src}
        onLoad={props.checkImageLoad}
      />
  )
}
export default Image

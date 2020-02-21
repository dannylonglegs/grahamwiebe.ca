import React from "react"
import LazyLoad from "react-lazyload"

const Image = props => {
  return (
    <LazyLoad>
      <img src={props.src} class="image" />
    </LazyLoad>
  )
}
export default Image

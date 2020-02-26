import React, { useState } from "react"

// import LazyLoad from "react-lazyload"

const Image = props => {
  const [loaded, setLoaded] = useState(false)

  const checkLoaded = e => {
      setLoaded(true);
  }

  return (
      <img
        src={props.src}
        onLoad={checkLoaded}
        class={loaded ? "image" : "image loading"}
      />
  )
}
export default Image

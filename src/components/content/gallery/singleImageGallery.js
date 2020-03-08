import React, { useState, useEffect } from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import ImageWrapper from "../imageWrapper"
import RichText from "../richText"

const SingleImageGallery = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const indexLimit = props.project.gallery.length - 1
  const projectText = props.project.projectText
    ? props.project.projectText.projectText
    : ""
  // let images = <div> No images </div>;
  let slides = <div> No images </div>

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

  // if (props.project.gallery) {
  //   images = props.project.gallery.map((image, i) => {
  //     return <ImageWrapper currentIndex={currentIndex} image={image} />
  //   })
  // }

  if (props.project.gallery) {
    slides = props.project.gallery.map((image, i) => {
      return (
        <Slide index={i}>
          <ImageWrapper currentIndex={currentIndex} image={image} />
        </Slide>
      )
    })
  }

  return (
    <div
      class={
        "single-image-gallery " + (projectText.length === 0 ? "no-text" : "")
      }
    >
      <div class="image-and-nav">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={indexLimit + 1}
        >
          <Slider>{slides}</Slider>
          <div class="image-nav">
            <ButtonBack>{"<"}</ButtonBack>
            <ButtonNext>{">"}</ButtonNext>
          </div>
        </CarouselProvider>
        {/* {images[currentIndex]} */}
        {/* <div class="image-nav">
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
        </div> */}
      </div>
      {projectText ? <RichText content={projectText} /> : null}
    </div>
  )
}
export default SingleImageGallery

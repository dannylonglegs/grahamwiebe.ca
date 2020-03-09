import React, { useState, useEffect, useContext } from "react"
import {
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  CarouselContext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import ImageWrapper from "../imageWrapper"
// import RichText from "../richText"

const SlidesAndNav = props => {
  const carouselContext = useContext(CarouselContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  )
  const indexLimit = props.project.gallery.length - 1
  let slides = <div> No images </div>

  useEffect(() => {
    window.document.onkeydown = checkKey
  }, [checkKey])

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  function checkKey(e) {
    const buttonNext = document.getElementById("button-next");
    const buttonBack = document.getElementById("button-back");
    e = e || window.event
    if (e.keyCode == "37") {
        buttonBack.click();
    } else if (e.keyCode == "39") {
        buttonNext.click();
    }
  }

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
    <React.Fragment>
      <Slider>{slides}</Slider>
      <div class="image-nav">
        <ButtonBack id={"button-back"} >{"<"}</ButtonBack>
        <div class="counter">{currentSlide + 1 + "/" + (indexLimit + 1)}</div>
        <ButtonNext id={"button-next"} >{">"}</ButtonNext>
      </div>
    </React.Fragment>
  )
}
export default SlidesAndNav

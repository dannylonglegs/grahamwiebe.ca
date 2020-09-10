import React, { useState, useEffect } from "react"
import ImageWrapper from "../imageWrapper"
import Img from "gatsby-image"

const NewGallery = props => {
  let images = <div> No images </div>
  let currentInfo = [<div> No Info </div>]

  let [infoArray, setInfoArray] = useState([])
  let [imgArray, setImgArray] = useState([])
  let [currentIndex, setCurrentIndex] = useState(0)
  let [indexLimit, setIndexLimit] = useState(0)

  useEffect(() => {
    // window.document.onkeydown = checkKey;
    setInfoArray(currentInfo)
    setImgArray(images)
    setIndexLimit(images.length - 1)
    console.log(props.project.gallery[currentIndex], "props gallery")
  }, [
    props,
    //  checkKey,
    currentIndex,
  ])

  const increaseCurrentIndex = () => {
    console.log("increase")
    if (currentIndex < indexLimit) {
      setCurrentIndex(currentIndex + 1)
    } else {
      return null
    }
  }

  const decreaseCurrentIndex = () => {
    console.log("decrease")
    if (currentIndex === 0) {
      return null
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // function checkKey(e) {
  //   const buttonNext = document.getElementById("button-next");
  //   const buttonBack = document.getElementById("button-back");
  //   e = e || window.event
  //   if (e.keyCode == "37") {
  //       buttonBack.click();
  //   } else if (e.keyCode == "39") {
  //       buttonNext.click();
  //   }
  // }

  if (props.project.gallery) {
    images = props.project.gallery.map((image, i) => {
      return (
        <Img
          fluid={image.image.fluid}
          objectFit="contain"
          imgStyle={{
            objectFit: "contain",
          }}
        />
      )
    })
  }

  if (props.project.gallery) {
    currentInfo = props.project.gallery.map((image, i) => {
      return (
        <div class="image-info">
          <h1>{image.title}</h1>
        </div>
      )
    })
  }

  return (
    <>
      <div class="image-display">{imgArray[currentIndex]}</div>
      <div class="imagenav-and-info">
        <div class="image-nav">
          <button onClick={decreaseCurrentIndex} id="button-next">
            {"<"}
          </button>
          <span>
            {currentIndex + 1} / {indexLimit + 1}
          </span>
          <button onClick={increaseCurrentIndex} id="button-back">
            {">"}
          </button>
        </div>
        <div class="image-info">
          {props.project.gallery[currentIndex].title ? (
            <h3 class="image-title">
              {props.project.gallery[currentIndex].title}
            </h3>
          ) : null}
          {props.project.gallery[currentIndex].year ? (
            <p class="year">{props.project.gallery[currentIndex].year}</p>
          ) : null}
          {props.project.gallery[currentIndex].medium ? (
            <p class="medium">{props.project.gallery[currentIndex].medium}</p>
          ) : null}
          {props.project.gallery[currentIndex].size ? (
            <p class="medium">{props.project.gallery[currentIndex].size}</p>
          ) : null}

          <p class="size">{props.size}</p>
        </div>
      </div>
    </>
  )
}
export default NewGallery

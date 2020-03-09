import React from "react"
import {
  CarouselProvider,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import RichText from "../richText"
import SlidesAndNav from '../gallery/SlidesAndNav'

const SingleImageGallery = props => {
  const indexLimit = props.project.gallery.length - 1
  const projectText = props.project.projectText
    ? props.project.projectText.projectText
    : ""

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
          <SlidesAndNav project={props.project}/>
        </CarouselProvider>
      </div>
      {projectText ? <RichText content={projectText} /> : null}
    </div>
  )
}
export default SingleImageGallery;

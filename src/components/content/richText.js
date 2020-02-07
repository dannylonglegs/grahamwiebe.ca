import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichText = props => {
  const richText = JSON.parse(props.content)
  const html = documentToReactComponents(richText)
  return <div class="rich-text">{html}</div>
}

export default RichText

import type {ReactElement} from "react";

type headingType = {
  title: string
}

export default function Heading({title}: headingType): ReactElement {
  return (
    <h2>{title}</h2>
  )
}
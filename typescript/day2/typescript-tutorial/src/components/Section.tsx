import type {ReactElement, ReactNode} from "react";

type SectionType = {
  title: string,
  children: ReactNode
}

export default function Section({title, children}: SectionType): ReactElement {
  return (
    <section>
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  )
}
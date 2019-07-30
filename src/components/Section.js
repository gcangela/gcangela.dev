import React from "react"
import { SectionHeading, SectionWrapper } from "./styles"

export const Section = ({ heading, children }) => {
  return (
    <SectionWrapper>
      <SectionHeading>{heading}</SectionHeading>
      {children}
    </SectionWrapper>
  )
}

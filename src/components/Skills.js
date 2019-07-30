import React from "react"
import styled from "styled-components"
import { SectionHeading } from "./styles"

const mockData = [
  {
    image: "",
    heading: "I got Skills",
    description: "Hey hey hey hey some text here hehehehehe",
  },
  {
    image: "",
    heading: "I got Skills",
    description: "Hey hey hey hey some text here hehehehehe",
  },
  {
    image: "",
    heading: "I got Skills",
    description: "Hey hey hey hey some text here hehehehehe",
  },
  {
    image: "",
    heading: "I got Skills",
    description: "Hey hey hey hey some text here hehehehehe",
  },
]

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`

const Panes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`
const Pane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 25%;
  max-width: 275px;
  margin: 0 5px;
  width: 100%;
  img {
    border: 1px solid black;
  }
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  h4 {
    margin-bottom: 24px;
  }
  p {
    text-align: center;
  }
`

const Skills = ({ skillsData }) => {
  return (
    <SkillsWrapper>
      <SectionHeading>Hello there</SectionHeading>
      <Panes>
        {mockData.map((skill, i) => {
          return (
            <Pane key={`Pane: ${i}`}>
              <img
                src={skill.image}
                alt={skill.heading}
                height="150"
                width="275"
              />
              <h4>{skill.heading}</h4>
              <p>{skill.description}</p>
            </Pane>
          )
        })}
      </Panes>
    </SkillsWrapper>
  )
}

export default Skills

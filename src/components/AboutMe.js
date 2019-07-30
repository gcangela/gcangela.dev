import React from "react"
import styled from "styled-components"
import Doge from "../static/images/doge.png"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  div {
    flex: 1 1 200px;
  }
`

const AboutMe = () => {
  return (
    <Wrapper>
      <div>
        Lorem ipsum samet midi Lorem ipsum samet midiLorem ipsum samet midiLorem
        ipsum samet midiLorem ipsum samet midiLorem ipsum samet midiLorem ipsum
        samet midi
      </div>
      <div>
        <img src={Doge} />
      </div>
    </Wrapper>
  )
}

export default AboutMe

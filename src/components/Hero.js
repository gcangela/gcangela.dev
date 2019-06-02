import React from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import Doge from "../static/images/doge.png"

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    margin: 0;
  }
  font-family: "IBM Plex Mono", monospace;
`
const HeroTitle = styled.h2`
  margin: 40px 0;
  font-family: inherit;
`
const HeroSubTitle = styled.h4`
  color: #715fcc;
  max-width: 500px;
  text-align: center;
  line-height: 28px;
  font-size: 18px;
  font-family: inherit;
`

const Hero = () => {
  return (
    <>
      <Col span={24}>
        <HeroContainer>
          <img src={Doge} height="150" width="150" />
          <HeroTitle>Hi, I am Giancarlo</HeroTitle>
          <HeroSubTitle>
            I'm a frontend engineer who loves to learn new skills and apply them
            by building apps
          </HeroSubTitle>
        </HeroContainer>
      </Col>
    </>
  )
}

export default Hero

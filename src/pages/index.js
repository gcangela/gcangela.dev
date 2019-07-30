import React from "react"
import { Row, Col } from "antd"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import AboutMe from "../components/AboutMe"
import { Section } from "../components/Section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section type="flex" justify="center" align="middle">
      <Hero />
    </Section>
    <Section heading="About me">
      <AboutMe />
    </Section>
    <Section>
      <Skills />
    </Section>
  </Layout>
)

export default IndexPage

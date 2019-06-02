import React from "react"
import { Row, Col } from "antd"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const Section = styled(Row)`
  margin: 0 50px;
  padding: 120px 0 0 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section type="flex" justify="center" align="middle">
      <Hero />
    </Section>
    <Section>
      <Col span={12}>
        <form name="dolo" netlify>
          <input type="text" value="smoel" />
          <button>awo</button>
        </form>
      </Col>
      <Col span={12}>intro</Col>
    </Section>
  </Layout>
)

export default IndexPage

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import { Layout as SiteLayout } from "antd"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const PageLayout = styled(SiteLayout)`
  background: #fff;
  height: 4000px;
`
const ContentWrapper = styled(SiteLayout.Content)`
  position: relative;
  top: 64px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <PageLayout>
        <script
          src="https://apis.google.com/js/platform.js?onload=renderButton"
          async
          defer
        />
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </PageLayout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

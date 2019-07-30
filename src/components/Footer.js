import React from "react"
import PropTypes from "prop-types"
import { Layout } from "antd"

import styled from "styled-components"

const FooterWrap = styled(Layout.Footer)`
  background: #5a66d4;
  color: #fff;
`

const Footer = props => {
  return (
    <FooterWrap>
      © {new Date().getFullYear()} built by Giancarlo Angela
    </FooterWrap>
  )
}

Footer.propTypes = {}

export default Footer

import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const FooterWrap = styled.footer`
  background: teal;
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Row, Col, Button, Layout } from "antd"
import "antd/dist/antd.css"
import Doge from "../static/images/doge.png"

const HeaderWrapper = styled(Layout.Header)`
  color: #141035;
  background: #d9d6ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin: 0;
  }
  position: fixed;
  width: 100%;
  z-index: 1;
`

const StyledButton = styled(Button)`
  color: inherit;
  font-size: 16px;
  border-color: inherit;
  font-weight: 700;
  &:hover {
    background: #5a66d4;
    color: #fff;
  }
  &:focus {
    color: inherit;
    border-color: inherit;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <img height="40" width="40" src={Doge} />
      <StyledButton>Say Hello</StyledButton>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

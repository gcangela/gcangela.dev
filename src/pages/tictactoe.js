import React from "react"
import Board from "../components/TicTacToe/Board"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`

const TicTacToe = () => {
  return (
    <Wrapper>
      <Board />
    </Wrapper>
  )
}

export default TicTacToe

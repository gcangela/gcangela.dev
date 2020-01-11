import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { useState } from "react"

const BoardGrid = styled.div`
  display: grid;
  max-width: 600px;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
`

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  height: 100%;
  width: 100%;
  font-size: 60px;
`
const winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const Board = () => {
  const [turn, setTurn] = useState("X")
  const [board, setBoard] = useState(Array(9).fill(""))
  const [totalMoves, setTotalMoves] = useState(0)
  const [winner, setWinner] = useState("")

  function calculateWinner(boardHehe) {
    const winner = winningMoves.reduce((acc, [x, y, z]) => {
      if (
        boardHehe[x] &&
        boardHehe[x] === boardHehe[y] &&
        boardHehe[y] === boardHehe[z]
      ) {
        // setWinner(boardHehe[x])
        acc = boardHehe[x]
      }
      return acc
    }, "")
    setWinner(oldwin => {
      console.log(winner)
      return oldwin + winner
    })
    return winner
  }

  function handleClick(e, index) {
    if (winner) {
      return
    }
    setTotalMoves(totalMoves => totalMoves++)
    if (!board[index]) {
      e.target.innerText = turn
      setTurn(turn => (turn === "X" ? "O" : "X"))
      setBoard(board => {
        board[index] = turn
        return board
      })
      calculateWinner(board)
    }
  }

  return (
    <BoardGrid>
      {board.map((_, i) => (
        <Square key={i} onClick={e => handleClick(e, i)} />
      ))}
    </BoardGrid>
  )
}

export default Board

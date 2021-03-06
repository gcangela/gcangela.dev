import React, { useState, useEffect } from "react"
import { useCountdownTimer } from "../hooks/useCountdownTimer"
import BBDushi from "../static/images/tutu.jpg"
import Paps from "../static/images/paps.png"
import "../static/css/hehe.css"
import styled from "styled-components"

const Besito = styled.div`
  position: absolute;
  bottom: 32px;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const BesitoTimer = () => {
  const [showBesito, setShowBesito] = useState(false)

  const { days, hours, minutes, seconds } = useCountdownTimer("2020-02-13")

  useEffect(() => {
    setShowBesito(showBesito => !showBesito)
  }, [seconds])

  return (
    <div className="main-wrapper" style={{ height: "100%" }}>
      <div className="besito-wrapper">
        <h1>BESITO COUNTDOWN</h1>
        <div className="images">
          <img className="image paps" src={Paps} />
          <img className="image dushi" src={BBDushi} />
        </div>
        <div className="red-circle">
          <span className="days">
            {days} {days > 1 ? "days" : "day"}
          </span>
          <span className="time">
            {hours} {hours > 1 ? " hours" : " hour"} {minutes}{" "}
            {minutes > 1 ? "minutes" : "minute"} {seconds}{" "}
            {seconds > 1 ? "seconds" : "second"}
          </span>
          {showBesito && <Besito>😘</Besito>}
        </div>
      </div>
    </div>
  )
}

export default BesitoTimer

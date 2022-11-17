import React from 'react'
import styled from 'styled-components'

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
`
const Username = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
  @media (max-width: 450px) {
    display: none;
  }
`
const WelcomeText = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
`

const name = "Rodrigo Rubio"

function buendia() {
  // get time of day and greet accordingly
  var now = new Date();
  var hour = now.getHours();
  var greeting = "Buenos días";
  if (hour > 12) {
    greeting = "Buenas tardes";
  }
  if (hour > 18) {
    greeting = "Buenas noches";
  }
  return greeting;
}

const Title = () => {
  return (
    <HeaderContent>
      <div>
        <Username>Hola {name}, {buendia()}</Username>
        <WelcomeText>Mostrando el panel principal</WelcomeText>
      </div>
    </HeaderContent>
  )
}

export default Title

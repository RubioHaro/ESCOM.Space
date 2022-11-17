import React from 'react'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'

const MainWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
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
const Text = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
`
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
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


const Settings = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Sidebar />
        <Wrapper>
          <HeaderContent>
            <div>
            <Username>Hola {name}, {buendia()}</Username>
              <Text>Mostrando Configuración</Text>
            </div>
          </HeaderContent>
        </Wrapper>
      </MainWrapper>
    </>
  )
}

export default Settings

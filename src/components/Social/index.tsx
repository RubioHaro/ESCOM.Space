import React from 'react'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import BasePageComponent from 'components/Common/PageComponent/Component'
import * as fb_qr from './facebook.group/qr.fb.jpg'

const MainWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`

const Footer = styled.div`
  // display: flex;
  // max-width: 1600px;
  // margin: 0 auto;
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
const greetingTime = () => {
  const date = new Date()
  const hours = date.getHours()
  if (hours < 12) {
    return 'Buenos días'
  } else if (hours >= 12 && hours < 18) {
    return 'Buenas tardes'
  } else {
    return 'Buenas noches'
  }
}

const greeting = greetingTime()
const title = 'Principales Redes Sociales'

const page = {
  greeting,
  title
}

const Social = () => {
  return (
    <>
      <BasePageComponent {...page}>
        <MainWrapper>
          <Wrapper>
            <h1>Redes Sociales</h1>
            <iframe
              src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fescomipnmx&amp;tabs=timeline&amp;width=500&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId'
              width='500'
              height='500'
              scrolling='no'
              allow='encrypted-media'
            ></iframe>
          </Wrapper>
          <Wrapper>
            <div>
              <h1>Grupo de Facebook</h1>
              <a href='https://www.facebook.com/groups/ESCOMarket'>
                <img height={'450px'} src={fb_qr}></img>
              </a>
            </div>
          </Wrapper>
        </MainWrapper>
        <div>
          <Footer>
            <div>
              <h3>Redes Sociales</h3>
              <a href='https://www.facebook.com/escomipnmx/'>
                <i className='fab fa-facebook-square'></i>
              </a>
              <a href='https://www.instagram.com/escom_ipn/'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='https://www.twitter.com/escom_ipn/'>
                <i className='fab fa-twitter-square'></i>
              </a>
            </div>
          </Footer>
        </div>
      </BasePageComponent>
    </>
  )
}

export default Social

import React from 'react'
import styled from 'styled-components'
import IconGoogle from 'components/Common/Icons/SocialMedia/Google'
import IconFacebook from 'components/Common/Icons/SocialMedia/Facebook'
import { initializeApp } from 'firebase/app'
// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAnalytics } from 'firebase/analytics'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthCredential
} from 'firebase/auth'

const provider: GoogleAuthProvider = new GoogleAuthProvider()

const firebaseConfig = {
  apiKey: 'AIzaSyB922H0Y1MX33hvIFiryAQ5eLSNWq6GGJQ',
  authDomain: 'escom-app-c66b1.firebaseapp.com',
  projectId: 'escom-app-c66b1',
  storageBucket: 'escom-app-c66b1.appspot.com',
  messagingSenderId: '91113791174',
  appId: '1:91113791174:web:82135848c1f5aba21bc1c7',
  measurementId: 'G-SL6NXNKVK6'
}

const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth()
const db = firebase.firestore()

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Text = styled.span`
  margin: 15px 0;
  color: #92929d;
  font-size: 12px;
  text-transform: uppercase;
`
const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 38px;
  border: none;
  background: #fc5a5a;
  border-radius: 10px;
  cursor: not-allowed;
  :focus {
    outline: none;
  }
  span {
    margin-left: 10px;
    color: white;
    font-size: 12px;
  }
`
const ButtonFacebook = styled.button`
  background: #50b5ff;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 38px;
  border: none;
  border-radius: 10px;
  cursor: not-allowed;
  :focus {
    outline: none;
  }
  span {
    margin-left: 10px;
    color: white;
    font-size: 12px;
  }
`

// create event listener for button click
const handleGoogleClick = () => {
  console.log('Loading Google...');
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(
        result
      )
      if (credential !== null) {
        // console.log(credential.toLowerCase());
        const token: string | undefined = credential.accessToken
      }
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // log error to console
      console.log(error)
    })
}


const Social = () => {
  return (
    <Wrapper>
      <Text>or</Text>
      <ButtonGoogle >
        <IconGoogle />
        <span>Iniciar con Google (proximamente)</span>
      </ButtonGoogle>
      <ButtonFacebook>
        <IconFacebook />
        <span>Iniciar con Facebook (proximamente)</span>
      </ButtonFacebook>
    </Wrapper>
  )
}

export default Social

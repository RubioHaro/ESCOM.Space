import React from 'react'
// import logo from './../../../../assets/images/logo.png';
const logo = require('./../../../../assets/images/logo.png')
interface ILogoImageProps {
  size: {
    height: number
    width: number
  }
  color: string
}

const Image: React.FC<ILogoImageProps> = props => {
  const { size, color } = props
  let img = {
    height: 20,
    width: 20
  }

  if (typeof size.height !== 'undefined') {
    img = {
      height: size.height,
      width: size.width
    }
  }
  return (
    <img src={logo} width={`${img.width}`} height={`${img.height}`} />
    // <svg
    //   width={`${size}`}
    //   height={`${size}`}
    //   viewBox='0 0 50 50'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <rect
    //     x='3'
    //     y='6.5'
    //     width='36'
    //     height='36'
    //     rx='12'
    //     stroke={`${color}`}
    //     strokeWidth='6'
    //   />
    //   <rect
    //     x='19.5'
    //     y='8'
    //     width='18'
    //     height='18'
    //     rx='9'
    //     stroke={`${color}`}
    //     strokeWidth='6'
    //   />
    // </svg>
  )
}

export default Image

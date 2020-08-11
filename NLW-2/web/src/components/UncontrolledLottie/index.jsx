// UncontrolledLottie.jsx
import React from 'react'
import Lottie from 'react-lottie'


const UncontrolledLottie = (props) => {
  const { animationData } = props

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <div>
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  )
}

export default UncontrolledLottie

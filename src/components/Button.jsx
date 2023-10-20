import React from 'react'
import { colorVariant } from '../constants/colors'

const Button = ({ text, color, type = 'button', callBack }) => {
  return (
    <button
      type={type}
      className={`${colorVariant[color]} mb-2 mr-2 rounded-lg px-5 py-2 text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 active:opacity-80 `}
      onClick={callBack}
    >
      {text}
    </button>
  )
}

export default Button

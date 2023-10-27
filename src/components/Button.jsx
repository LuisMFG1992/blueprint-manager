import React from 'react'
import { colorVariant } from '../constants/colors'

const Button = ({
  text,
  color,
  type = 'button',
  callBack,
  disabled,
  ...rest
}) => {
  return disabled ? (
    <button
      type={type}
      className={
        'w-[200px] max-w-[350px] rounded-lg bg-gray-500 px-5 py-2 text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300'
      }
      onClick={callBack}
      disabled
    >
      {text}
    </button>
  ) : (
    <button
      type={type}
      className={`${colorVariant[color]} w-[200px] max-w-[350px] rounded-lg px-5 py-2 text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 active:opacity-80`}
      onClick={callBack}
    >
      {text}
    </button>
  )
}

export default Button

import React from 'react'

const colorVariant = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  red: 'bg-red-600'
}

const Button = ({ text, color, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`${colorVariant[color]} mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 `}
    >
      {text}
    </button>
  )
}

export default Button

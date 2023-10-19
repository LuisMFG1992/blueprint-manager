import { BsGoogle } from 'react-icons/bs'
import { colorVariant } from '../constants/colors'

const GoogleButton = ({ color, callback }) => {
  return (
    <button
      type='button'
      className={` ${colorVariant[color]} mb-2 mr-2 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 `}
      onClick={callback}
    >
      <BsGoogle /> Sing in with Google
    </button>
  )
}

export default GoogleButton

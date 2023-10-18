import { BsGoogle } from 'react-icons/bs'

const GoogleButton = () => {
  return (
    <button
      type='button'
      className=' mb-2 mr-2 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
    >
      <BsGoogle /> Sing in with Google
    </button>
  )
}

export default GoogleButton

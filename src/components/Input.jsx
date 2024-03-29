import { MdEmail, MdOutlineLock } from 'react-icons/md'

const icons = {
  email: (
    <MdEmail
      size={'2.5rem'}
      className='right-50 pointer-events-none absolute inset-y-2.5 flex items-center pl-3.5 text-gray-300'
    />
  ),
  password: (
    <MdOutlineLock
      size={'2.5rem'}
      className='right-50 pointer-events-none absolute inset-y-2.5 flex items-center pl-3.5 text-gray-300'
    />
  )
}

const Input = ({
  name,
  label,
  state,
  placeholder,
  inputType,
  icon,
  handleInputOnchange
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className='text-md mb-2 block text-start font-semibold text-gray-500'
      >
        {label}
      </label>
      <div className='relative '>
        {icons[icon]}
        <input
          type={inputType}
          name={name}
          value={state}
          id={name}
          className='text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-3.5 pl-12 text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          placeholder={placeholder}
          onChange={(e) => handleInputOnchange(e)}
        />
      </div>
    </>
  )
}

export default Input

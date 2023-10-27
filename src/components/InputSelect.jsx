import { titleCase } from '../utils'

const InputSelect = ({
  name,
  label,
  options = [],
  handleOnchange,
  disabled
}) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor='countries'
        className='mb-2 block text-sm font-medium text-gray-500'
      >
        {label}
      </label>
      <select
        disabled={disabled}
        id='countries'
        name={name}
        className=' block w-full min-w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        onChange={(e) => handleOnchange(e)}
      >
        <option defaultValue>Select a {label}</option>
        {options.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {titleCase(option.name || option)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect

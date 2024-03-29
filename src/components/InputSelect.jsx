import { titleCase } from '../utils'

const InputSelect = ({ name, label, options, handleOnchange }) => {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-gray-500'
      >
        {label}
      </label>
      <select
        disabled={options.length === 0}
        id={name}
        name={name}
        className=' block w-full min-w-[200px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        onChange={(e) => handleOnchange(e)}
      >
        <option value={null}>Select a {label}</option>
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

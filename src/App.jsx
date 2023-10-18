import './App.css'
import Button from './components/Button'
import GoogleButton from './components/GoogleButton'
import Input from './components/Input'

import substation from './assets/substation.jpg'

import { useState } from 'react'

const inputScheme = [
  {
    name: 'email',
    label: 'Your Email',
    placeholder: 'name@flowbite.com',
    inputType: 'email',
    icon: 'email'
  },
  {
    name: 'password',
    label: 'Your Password',
    placeholder: '*******',
    inputType: 'password',
    icon: 'password'
  }
]

function App() {
  const [inputsValues, SetInputsValues] = useState({
    email: '',
    password: ''
  })

  const handleInputOnchange = (e) => {
    const { name, value } = e.target
    SetInputsValues((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputsValues)
    SetInputsValues({
      email: '',
      password: ''
    })
  }

  return (
    <main className='center min-h-screen p-24'>
      <div className='flex shadow-2xl'>
        <div className='h-[800px] w-[600px] flex-col rounded-s-xl bg-white p-10'>
          <h1 className='mb-36 pt-10 text-center text-[2.5rem] font-bold'>
            Blueprint Manager
          </h1>
          <form
            className='flex h-full w-full flex-col gap-4'
            onSubmit={(e) => onSubmit(e)}
          >
            <div className='flex flex-col gap-4'>
              {inputScheme.map((input) => {
                const { name, label, placeholder, inputType, icon } = input
                return (
                  <Input
                    key={name}
                    name={name}
                    state={inputsValues[name]}
                    label={label}
                    placeholder={placeholder}
                    inputType={inputType}
                    icon={icon}
                    handleInputOnchange={handleInputOnchange}
                  />
                )
              })}
            </div>

            <div className='inline-flex gap-2'>
              <Button text='Log In' color='blue' type='submit' />
              <Button text='Sing In' color='blue' />
              <GoogleButton />
            </div>
          </form>
        </div>
        <div className='relative h-[800px] w-[600px] overflow-hidden rounded-e-xl'>
          <img src={substation} className='h-full w-full object-cover' alt='' />
        </div>
      </div>
    </main>
  )
}

export default App

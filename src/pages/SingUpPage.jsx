import React, { useContext, useState } from 'react'

import substation from '../assets/substation.jpg'
import { authContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

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

const SingUpPage = () => {
  const navigate = useNavigate()

  const { userCreate, sendEmailVerification } = useContext(authContext)

  const [inputsValues, SetInputsValues] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleInputOnchange = (e) => {
    const { name, value } = e.target
    SetInputsValues((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const signUp = async (e) => {
    e.preventDefault()
    const { email, password } = inputsValues

    try {
      await userCreate(email, password)
      sendEmailVerification(email)
      SetInputsValues({
        email: '',
        password: ''
      })
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <section className='vStack max-w-[1000px]'>
      <div className='hStack gap-10 rounded-xl bg-white p-5 shadow-2xl md:h-[75vh] md:min-w-[50%] md:gap-0 md:rounded-none md:rounded-s-xl'>
        <div className='hStack gap-2'>
          <h1 className='text-center text-[2rem] font-bold text-gray-600 lg:text-[2.3rem]'>
            Blueprint Manager
          </h1>
          <p className='] text-center text-[15px] text-gray-500 lg:text-[1.2rem]'>
            Access your information, anytime, anywhere.
          </p>
        </div>

        <div className='hStack h-full justify-center'>
          <form className='hStack gap-10' onSubmit={(e) => signUp(e)}>
            <div className='hStack gap-4'>
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
            <div className='flex justify-center'>
              <Button
                text='Create account'
                color='green'
                type='submit'
                callBack={signUp}
              />
            </div>
            <p>
              Already have an account?{' '}
              <Link to={'/'} className='font-semibold text-blue-600'>
                Log in here.
              </Link>
            </p>
            <p className='bottom-2 left-4 text-gray-500'>
              Created by Luis Flores.
            </p>
          </form>
          {error && (
            <div className='mt-2 rounded-lg bg-red-200 px-2 py-4 text-center text-lg font-medium text-red-600 '>
              {error}
            </div>
          )}
        </div>
      </div>
      <div className='hidden overflow-hidden rounded-e-xl md:block md:h-[75vh] md:min-w-[50%] md:rounded-none md:rounded-e-xl'>
        <img src={substation} className='h-full w-full object-cover' alt='' />
      </div>
    </section>
  )
}

export default SingUpPage

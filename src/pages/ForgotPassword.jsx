import React, { useContext, useState } from 'react'
import ContainerCenter from '../components/ContainerCenter'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import { authContext } from '../context/AuthContext'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const { resetPassword } = useContext(authContext)

  const handleInputOnchange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email) console.log('No email')

    const res = resetPassword(email)
    try {
      if (!res.ok) console.log('ERROR!!!')
      console.log(res)
    } catch (error) {}
    console.log(email)
  }

  return (
    <ContainerCenter>
      <div className='center relative flex h-[800px] w-[1200px] flex-col items-center gap-4 rounded-xl bg-white p-10'>
        <div>
          <h2 className='text-center text-[2.8rem] font-bold text-gray-600'>
            Reset your password
          </h2>
          <p className='text-gray-500'>
            Enter your user account's verified email address and we will send
            you a password reset link.
          </p>
        </div>

        <form onSubmit={onSubmit} className='flex flex-col gap-4'>
          <Input
            name={'email'}
            state={email}
            label={'Your Email'}
            placeholder={'Your@email.com'}
            inputType={'text'}
            icon={'email'}
            handleInputOnchange={handleInputOnchange}
          />

          <button
            type='submit'
            className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
          >
            Submit
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to={'/'} className='font-semibold text-blue-600'>
            Log in here.
          </Link>
        </p>
        <p>
          Don't have an account yet?{' '}
          <Link to={'/register'} className='font-semibold text-blue-600'>
            Register here.
          </Link>
        </p>
      </div>
    </ContainerCenter>
  )
}

export default ForgotPassword

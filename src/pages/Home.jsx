import React from 'react'
import Button from '../components/Button'
import { logOut } from '../../utils'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

const Home = ({ setIsLoggedIn }) => {
  return (
    <div className='flex rounded-xl shadow-2xl'>
      <div className='flex h-[800px] w-[1200px] flex-col rounded-xl bg-white p-10'>
        <h1 className='mb-36 pt-10 text-center text-[3rem] font-bold text-gray-600'>
          Blueprint Manager
        </h1>
        <Button
          text='Log Out'
          color='red'
          callBack={() => logOut(signOut, auth, setIsLoggedIn)}
        />
      </div>
    </div>
  )
}

export default Home

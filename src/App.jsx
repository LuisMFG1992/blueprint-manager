import './App.css'

import { useState } from 'react'

import Home from './pages/Home'
import NotLoggedIn from './pages/NotLoggedIn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <main className='center min-h-screen'>
      {isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <NotLoggedIn setIsLoggedIn={setIsLoggedIn} />
      )}
    </main>
  )
}

export default App

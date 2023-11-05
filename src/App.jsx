import './App.css'

import { Route, Routes } from 'react-router-dom'

import { ErrorPage, ForgotPassword, Home, LogInPage, SingUpPage } from './pages'
import PrivateRoute from './router/PrivateRoute'
import PublicRoute from './router/PublicRoute'
import ContainerCenter from './components/ContainerCenter'

function App() {
  return (
    <>
      <ContainerCenter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path='/' element={<LogInPage />} />
            <Route path='/register' element={<SingUpPage />} />
            <Route path='/account-recovery' element={<ForgotPassword />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path='/home' element={<Home />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ContainerCenter>
    </>
  )
}

export default App

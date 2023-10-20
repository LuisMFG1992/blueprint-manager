import React from 'react'
import ContainerCenter from '../components/ContainerCenter'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <ContainerCenter>
      <section className='flex rounded-xl bg-white shadow-2xl'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
          <div className='mx-auto max-w-screen-sm text-center'>
            <h1 className='text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
              404
            </h1>
            <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>
              Something is missing.
            </p>
            <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
              Sorry, we cannot find that page. You will find lots to explore on
              the home page.
            </p>
            <Link
              to={'/'}
              className='hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </ContainerCenter>
  )
}

export default ErrorPage

import React from 'react'
import Login from './pages/login/login'
import SignUp from './pages/signup/signUp'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-sky-300'>
      {/* <Login /> */}
      <SignUp />
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-3xl font-bold underline'>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

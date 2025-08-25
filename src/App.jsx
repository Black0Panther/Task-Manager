import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
function App() {


  return (
    <>
    <div className='min-h-screen bg-gray-300 flex flex-col'>
     <Navbar></Navbar>
     <div className='flex-1 flex items-center'>
      <Routes>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<PrivateRoute> <Dashboard/></PrivateRoute>}></Route>
      </Routes>
     
     </div>
     </div>
    </>
  )
}

export default App

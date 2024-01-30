import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
      </Routes>
    </div>
  )
}

export default App
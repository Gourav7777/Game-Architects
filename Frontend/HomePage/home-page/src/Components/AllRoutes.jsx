import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Video from './Video'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/signup" element={<Signup></Signup>}/>
    <Route path="/login" element={<Login></Login>}/>
    <Route path="/" element={<Video/>}/>
  </Routes>
  )
}

export default AllRoutes
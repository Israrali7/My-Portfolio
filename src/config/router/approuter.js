import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Intro from '../../pages/intro'
import Contact from '../../pages/contact'
import Thanks from '../../pages/thanks'
import NavBar from '../../components/Navbar'

function Approuter() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='intro' element={<Intro/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='thanks' element={<Thanks/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Approuter

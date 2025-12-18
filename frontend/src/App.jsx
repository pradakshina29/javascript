import React from 'react'

import User from './components/User'
import Form from './hooks/Form'
import State from './hooks/State'
import About from './pages/About'
import Home from './pages/Home'
import {Route,Routes}from"react-router-dom"
import Services from'./pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/services" element ={<Services/>}/>
        <Route path="/contact" element ={<Contact/>}/>
      </Routes>
      <Navbar/>
      

    </div>
  )
}

export default App

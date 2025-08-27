import React from 'react'
import './App.css'
import Header from './components/header'
import Home from './pages/Home'
import Services from './pages/Services'
import { About } from './pages/About'
import { Route, Router, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
    <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element = {<Contact/>}/>
   </Routes>
   <Footer/>
   </div>
  )
}

export default App
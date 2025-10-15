import React from 'react'
import './App.css'
import Header from './components/header'
import Home from './pages/Home'
import Services from './pages/Services'
import { About } from './pages/About'
import { Route, Router, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import Contact from './pages/Contact'
import Topbar from './components/Topbar'
import Chiropractic from './pages/chiropractic'
import SportsInjury from './pages/sportsinjury'
import Hijama from './pages/Hijama'
import ManualTherapy from './pages/ManualTherapy'
import KinesioTaping from './pages/Kinisio'
import DryNeedling from './pages/DryNeedling'
const App = () => {
  return (
    <div>
      <Topbar/>
    <Header/>
   <Routes>
    <Route path='/' element={<>
    <Home/>
    <Services/>
    <About/>
    <Contact/>
    </>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/services/chiro' element={<Chiropractic/>}/>
    <Route path='/services/sports' element={<SportsInjury/>}/>
    <Route path='/services/hijama' element={<Hijama/>}/>
    <Route path='/services/manual' element={<ManualTherapy/>}/>
    <Route path='/services/kinisio' element={<KinesioTaping/>}/>
    <Route path='/services/accupuncture' element={<DryNeedling/>}/>


   </Routes>
   <Footer/>
   </div>
  )
}

export default App
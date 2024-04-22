import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Finddoctors from './Finddoctors'
function App() {
  return (
    <> 
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/finddoctors" element={<Finddoctors/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App

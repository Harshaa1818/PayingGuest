import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './pages/Navbar.jsx'
import LandingPage from "./pages/LandingPage.jsx"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/landing" element={<LandingPage/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
    </Routes>
    </>
  )
}

export default App

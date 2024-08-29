
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'

import Navbar from './pages/Navbar.jsx'
import LandingPage from "./pages/LandingPage.jsx"
import { SigninPage } from './pages/SigninPage.jsx'
import { SignupPage } from './pages/SignupPage.jsx'
import BookingPage from './pages/BookingPage.jsx'

function App() {
  
  

  localStorage.setItem("isLoggedIn",false) 
 

  



  return (
    <>
    
    
    <Routes>
    
      <Route path="/landing" element={<LandingPage/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/about' element={<SignupPage/>}/>
      <Route path='/contact' element={<SignupPage/>}/>
      <Route path='/services' element={<SignupPage/>}/>
      <Route path='/bookingpage' element={<BookingPage/>}/>



    </Routes>
    </>
  )
}

export default App


import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'

import { Navbar } from './pages/Navbar.jsx'
import { LandingPage } from "./pages/LandingPage.jsx"
import { SigninPage } from './pages/SigninPage.jsx'
import { SignupPage } from './pages/SignupPage.jsx'
import { BookingPage } from './pages/BookingPage.jsx'
import { UserDashboard } from './pages/UserDashboard.jsx'
import { AdminDashboard } from './pages/AdminDashboard.jsx'

function App() {


  return (
    <>
    
    
    <Routes>
    
      <Route path='/' element={<Navbar/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path="/landing/" element={<LandingPage/>}/>
      <Route path='/user-dashboard' element={<UserDashboard/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
      <Route path='/bookingpage/:id' element={<BookingPage/>}/>



    </Routes>
    </>
  )
}

export default App

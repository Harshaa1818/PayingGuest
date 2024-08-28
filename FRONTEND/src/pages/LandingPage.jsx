import React from 'react'
import { AdminDashboard } from './AdminDashboard.jsx'
import { UserDashboard } from './UserDashboard.jsx'
import Navbar from './Navbar.jsx';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      {localStorage.getItem('role') === 'admin' ? <AdminDashboard/> : <UserDashboard/>}
      </div>
      
    
  )
}

export default LandingPage;

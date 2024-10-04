import React from 'react'
import { AdminDashboard } from './AdminDashboard/index.jsx'
import { UserDashboard } from './UserDashboard.jsx'

export function LandingPage() {
  return (
    <div>
      
      {localStorage.getItem('role') === 'admin' ? <AdminDashboard/> : <UserDashboard/>}
      </div>
      
    
  )
}



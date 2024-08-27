import React from 'react'

function LandingPage() {
  return (
    <div>
      {localStorage.getItem('role') === 'admin' ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>}
      
    </div>
  )
}

export default LandingPage

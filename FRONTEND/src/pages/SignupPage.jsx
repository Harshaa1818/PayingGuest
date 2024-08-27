import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleSignup = ()=>{
        axios.post('http://localhost:8000/signup', {email, password, name})
        .then(()=>{
            navigate('/signin')
            
        })
        .catch((err)=>console.log(err))
    }

    return(<>
    <h1>Signup Page</h1>
    <input type="text"  onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
    <button onClick={handleSignup}>Signup</button>
    </>)
}
export { SignupPage }
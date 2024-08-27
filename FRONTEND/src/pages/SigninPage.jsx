import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SIgninPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignin = () => {
        axios.post('http://localhost:8000/signin', {email, password})
        .then((data)=>{
        localStorage.setItem('isUserLoggedIn', true)
        data.data.role=='admin' ? localStorage.setItem('role', 'admin') : localStorage.setItem('role', 'user')
        navigate('/landing')
        }   
        )
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <h1>Signin Page</h1>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
            <input type="password" onChange={(e)=>setPassword(e.target.value)}placeholder="Enter your password" />
            <button onClick={handleSignin}>Signin</button>
        </div>
    )

}
export { SIgninPage }
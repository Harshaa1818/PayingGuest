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
        .catch((err)=>{
            alert("registration failed")
            console.log(err)
        })
    }

    return(
         <div>
        <h1 className="text-3xl m-5 flex justify-center font-serif" >SignUp Page</h1>
        <div className="text-2xl mt-36">
        <div className="flex justify-center m-10"><input className="border-b-2" type="string" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" /></div>
        <div className="flex justify-center m-10"><input className="border-b-2" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" /></div>
        <div className="flex justify-center m-10"><input className="border-b-2" type="password" onChange={(e)=>setPassword(e.target.value)}placeholder="Enter your password" /></div>
        <div className="flex justify-center m-10  "><button className="bg-blue-200 px-5 py-2 rounded-md" onClick={handleSignup}>Register</button></div>
        </div>
        
    </div>
)
}
export { SignupPage }
import React, { useState } from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import { ApiInstance } from "../ApiInstance"


const SigninPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignin = () => {
       ApiInstance.post('/user/signin', {email: email, password: password})
        .then((data)=>{
        localStorage.setItem('isLoggedIn', true)
        data.data.role=='admin' ? localStorage.setItem('role', 'admin') : localStorage.setItem('role', 'user')
        navigate('/landing')
        }   
        )
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <h1 className="text-3xl m-5 flex justify-center font-serif" >Signin Page</h1>
            <div className="text-2xl mt-36">
            <div className="flex justify-center m-10"><input className="border-b-2" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" /></div>
            <div className="flex justify-center m-10"><input className="border-b-2" type="password" onChange={(e)=>setPassword(e.target.value)}placeholder="Enter your password" /></div>
            <div className="flex justify-center m-10  "><button className="bg-blue-200 px-5 py-2 rounded-md" onClick={handleSignin}>Signin</button></div>
            </div>
            <Link  to='/signup' className="flex justify-center m-10 "><button className="bg-blue-200 px-5 py-2 rounded-md">Register</button></Link>
        </div>
    )

}
export { SigninPage }
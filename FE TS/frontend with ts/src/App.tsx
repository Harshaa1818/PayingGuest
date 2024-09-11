
import './App.css'
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { Box, TextField, Grid, Typography } from '@mui/material';
import { apiInstance } from './Api'
import { Route, useNavigate, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
 const navigate = useNavigate()


  const handleSignin = ():void => {
    apiInstance.post('/auth/login/', {email, password})
    .then((res)=>{
      alert("Login Success")
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.role);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard')
    })
    .catch(err=>alert('Login Failed, please try again'))
    

  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<>loading..</>}/>
    </Routes>
    <Box>
  <Typography fontSize={"30px"} color='lightBlue'>SignIn Page</Typography>
  <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
  <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e)=>setEmail((e.target.value))} />
  <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e)=>setEmail((e.target.value))} />
  </div>

  <Button style={{marginTop:"10px"}} variant="contained" onClick={handleSignin}>Login</Button>
    </Box>

    </BrowserRouter>
  )
}

export default App

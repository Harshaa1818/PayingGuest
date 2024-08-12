import express from 'express';
import {connectDB} from './DB/index.js'
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})

const app=express();

app.use(express.json());

app.use("/health",(req,res)=>{
    res.send("server running fine")

})

try {
    connectDB()
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })

} catch (error) {
    err=>console.log(err)
    
}


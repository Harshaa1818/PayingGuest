import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path:"../.env"
})

const connectDB=()=>{
     mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("db connected")

    })
    .catch(err=>console.log(err));

    }

export {connectDB}
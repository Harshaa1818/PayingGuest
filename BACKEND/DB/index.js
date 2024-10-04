import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path:"../.env"
})

const connectDB = async () => {
    try{
          const instance = await mongoose.connect(process.env.MONGODB_URI)
          if(instance) console.log("db connected" )
    }
    catch(err){
       console.log({message: err.message})
    }
 }

export {connectDB}
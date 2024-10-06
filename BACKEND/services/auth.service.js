import { User } from '../models/user.models.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({
    path: '../.env'
})

class authService{
    static async findbyMailId( email ){
        return await User.findOne({ email })

    }
    static async register(data){
        return await User.create(data)
    }
    static async findById(id){
        console.log(id)
        return await User.findById(id)
        
    }
    static async generateToken(id){
        const token = await jwt.sign({id:id}, process.env.JWT_SECRET)
       return token
        
    }
}

export {authService}
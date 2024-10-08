import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
   
        email: {
        type: String,
        required: true,
        unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            },
        password: {
        type: String,
        required: true,
        },
        role: {
        type: String,
        enum: ['visitor', 'owner', 'admin'],
        required: true,
        },
        contactNo: {
        type: String,
        required: false,
        },
        salt:{
            type: String,
            required: true,
        }

},
{
    timestamps:true
})

export const User=mongoose.model("User",userSchema)
import mongoose from 'mongoose'

const orderSchema=new mongoose.Schema({
        visitor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        },
        property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
        },
        startDate: {
        type: Date,
        required: true,
        },
        endDate: {
        type: Date,
        required: true,
        },
       

},
{
    timestamps:true
})

export const Order=mongoose.model("Order",orderSchema)
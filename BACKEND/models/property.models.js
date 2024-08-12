import mongoose from "mongoose";

const propertySchema=new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        },
        name: {
        type: String,
        required: true,
        },
        address: {
        type: String,
        required: true,
        },
        location: {
        type: {
        type: String, // Point is the type for GeoJSON
        enum: ['Point'],
        required: true,
        },
        coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
        },
        },
        images: [{
        type: String,
        required: true,
        }],
        contactNo: {
        type: String,
        required: true,
        },
        approved: {
        type: Boolean,
        default: false,
        },


},
{
    timestamps:true
})

export const Property=mongoose.model("Property",propertySchema)
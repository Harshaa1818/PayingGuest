import { propertyService } from '../services/property.service.js'


const getAllNearbyProperties = ( req,res ) => {
    const { lat, long } = req.query;

    const nearByProperties = AlgoliaService.getNearbyProperties(lat, long)


}
const bookProperty = async( req,res ) => {
    const  propertyId  = req.params.id;
    const  userId  = req.user._id;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
     
    const confirmation = await propertyService.bookProperty({ visitor: userId, property: propertyId, startDate, endDate, status: "pending" })

    if(!confirmation){
        return res.status(400).json({message: "Property not booked"})
    }

    return res.status(201).json({message: "order placed", confirmation})

}

const getSpecificProperty = async( req,res ) => {
    const {id} = req.params;

    const property = await propertyService.getProperty({visitor:userId, property: id});

    if(!property){
        return res.status(404).json({message: "Property not found"})
    }

    return res.status(200).json({message:"property details are: ", property})
} 

const deletePropertyFromCart = async( req,res ) => {

    const { id } = req.params;
    const userId = req.user._id;
    const property = await propertyService.deletePropertyFromCart({property:id, visitor: userId});

    if(!property){
        return res.status(404).json({message: "Property not found"})
    }

    return res.status(200).json({message: "Property deleted", property})

}


export { getAllNearbyProperties, bookProperty, getSpecificProperty, deletePropertyFromCart }
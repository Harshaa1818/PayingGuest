import { visitorService } from '../services/visitor.service.js'


const getAllProperties = ( _,res ) => {
    // const { lat, long } = req.query;

    const nearByProperties = visitorService.getAllProperties()
    if(!nearByProperties){
        return res.status(404).json({message: "No properties found"})
    }
    return res.status(200).json({nearByProperties})


}



const getSpecificProperty = async( req,res ) => {
    const { id } = req.params;

    const property = await visitorService.getSpecificProperty({ property: id });

    if(!property){
        return res.status(404).json({message: "Property not found"})
    }

    return res.status(200).json({message:"property details are: ", property})
} 




export { getAllProperties, getSpecificProperty }
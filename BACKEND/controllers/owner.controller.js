import { ownerService } from '../services/owner.service.js' 
import { newPropertyValidatorSchema, updatePropertyValidatorSchema  } from '../validators/property.validator.js'

const getAllOwnerProperties = async ( req, res ) => {
    try{
        const ownerId = req.user._id;

        const properties = await ownerService.getAllPropertiesByOwnerId(ownerId);

        if(properties.length === 0){
            return res.status(404).json({message: "No properties found"})
        }

        return res.status(200).json({properties})
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}
const addProperty = async ( req, res ) => {
    try{
        const ownerId = req.user._id;
        const property = newPropertyValidatorSchema.safeParseAsync(req.body);

        if(property.error){
            return res.status(400).json({error: property.error.message})
        }

        const { owner, name, address, point, coordinates, images, contactNo, approved } = property.data;


        const newProperty = await ownerService.addProperty({ owner: ownerId, name, address, point, coordinates, images, contactNo, approved  })
        if(!newProperty){
            return res.status(400).json({message: "Property not added"})
        }

        return res.status(201).json({newProperty})
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}
const deleteProperty = ( req, res ) => {
    try {
        const owenerId = req.user._id;
        const propertyId = req.params.id;
        const property = ownerService.deleteProperty( propertyId );
        if(!property){
            return res.status(404).json({message: "Property not found"})
        }
        return res.status(200).json({message: "Property deleted"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateProperty = ( req, res ) => {
    try {
        const ownerId = req.user._id;
        const propertyId = req.params.id;

        const data = updatePropertyValidatorSchema.safeParseAsync(req.body);
        if(data.error){
            return res.status(400).json({error: data.error.message})
        }

        const property = ownerService.updateProperty( propertyId, data );

        if(!property){
            return res.status(404).json({message: "Property not found"})
        }

        return res.status(200).json({message:" details updated!!", property })

        
    } catch (error) {
        return res.status(500).json({error: error.message})
        
    }
}


export { getAllOwnerProperties, addProperty, deleteProperty, updateProperty  }
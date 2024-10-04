import { Property } from '../models/property.model.js'

class visitorService{
    static async getAllProperties(){
        return await Property.find({})
    }
    static async getSpecificProperty(propertyId){
        return await Property.findById(propertyId)
    }

}

export { visitorService }
import { Property } from '../models/property.model.js'

class visitorService{
    static async getAllProperties(){
        return await Property.find({})
    }
    static async getPropertyByArea(area){
        return await Property.find({area})
    }
    
}

export { visitorService }
import { Property } from '../models/property.model.js'

class ownerService{

    static async getAllPropertiesByOwnerId(id){
        return await Property.find({owner: id})
    }
    static async addProperty(property){
        return await Property.create(property)
    }
    static async updateProperty(id, data){
        return await Property.findByIdAndUpdate(
          { _id: id},
          {$set: data},
          {new: true},
          {runValidators: true}
        )
    }
    static async deleteProperty(id){
        return await Property.findByIdAndDelete(id)
    }
}
export default ownerService


  


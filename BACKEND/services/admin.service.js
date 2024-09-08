import { Property } from "../models/property.model.js";

class AdminService {

    
    static async getPendingProperty(){
        return await Property.find({approved: false});
    }
    static async approveProperty(id){
        return await Property.findByIdAndUpdate(id, {approved: true}, {new: true});
    }
    static async deleteProperty(id){
        return await Property.findByIdAndDelete(id);
    }
}

export { AdminService }
 
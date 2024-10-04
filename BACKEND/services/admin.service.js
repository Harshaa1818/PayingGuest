import { Property } from "../models/property.model.js";

class AdminService {

    
    static async getPendingProperty(){
        return await Property.find({approved: false});
    }
    static async approveProperty(id, approved){
        return await Property.findByIdAndUpdate(id, {approved}, {new: true});
    }
    static async deleteProperty(id){
        return await Property.findByIdAndDelete(id);
    }
}

export { AdminService }
 
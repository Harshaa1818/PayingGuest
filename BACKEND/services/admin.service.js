import { Property } from "../models/property.models";

class AdminService {

    static async getAllProperty(){
        return await Property.find({});

    }
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
 
import { Property } from "../models/property.models";

class AdminService {
    
    static async getAllProperty(){
        return await Property.find({});

    }
    static async getPendingProperty(){
        return await Property.find({approved: false});
    }
}

export { AdminService }
 
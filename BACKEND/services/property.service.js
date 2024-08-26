import { deletePropertyFromCart } from '../controllers/visitor.controller.js';
import { Order } from '../models/order.models.js'

class propertyService{
    static async getAllProperty(){
        return await Order.find({});

    }
    static async getProperty(data){
        return await Order.findOne({data});
    }
    static async bookProperty(property){
        return await Order.create(property)
    }
    static async deletePropertyFromCart(data){
        return await Order.deleteOne(data);
    }


}

export { propertyService }
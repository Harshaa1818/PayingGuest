import { deletePropertyFromCart } from '../controllers/visitor.controller.js';
import { Order } from '../models/order.models.js'

class propertyService{
    
    
    static async bookProperty(property){
        return await Order.create(property)
    }
   


}

export { propertyService }
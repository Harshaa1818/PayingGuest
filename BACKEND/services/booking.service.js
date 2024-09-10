
import { Order } from '../models/order.models.js'

class BookService{
    
    
    static async bookProperty(propertyId, userId, startDate, endDate){
        return await Order.create({visitor: userId, property: propertyId, startDate, endDate})
    }
   


}

export { BookService }
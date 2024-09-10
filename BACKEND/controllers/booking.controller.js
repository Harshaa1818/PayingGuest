import { BookService } from '../services/booking.service.js'


const bookProperty = async( req,res ) => {
    const  propertyId  = req.params.id;
    const  userId  = req.user._id;
    const { startDate, endDate } = req.body;
     
    const confirmation = await BookService.bookProperty( userId, propertyId, startDate, endDate);

    if(!confirmation){
        return res.status(400).json({message: "Property not booked"})
    }

    return res.status(201).json({message: "property booked", confirmation})

}

export { bookProperty}
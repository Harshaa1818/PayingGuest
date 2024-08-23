import router from 'express';
import { getAllNearbyProperties, bookProperty, getSpecificProperty, deletePropertyFromCart } from '../controllers/visitor.controller.js';
import { verifyJWT } from '../middlewares/auth.js';

const visitorRouter = router();

visitorRouter.get('/', getAllNearbyProperties)
visitorRouter.post('/book/:id',verifyJWT, bookProperty)
visitorRouter.get('/:id', verifyJWT, getSpecificProperty)
visitorRouter.delete('/delete/:id', verifyJWT, deletePropertyFromCart)

export { visitorRouter }
import router from 'express';
import { getAllNearbyProperties, bookProperty, getSpecificProperty } from '../controllers/visitor.controller.js';

const visitorRouter = router();

visitorRouter.get('/', getAllNearbyProperties)
visitorRouter.post('/book/:id', bookProperty)
visitorRouter.get('/:id', getSpecificProperty)

export { visitorRouter }
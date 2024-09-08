import router from 'express';
import { getAllProperties, bookProperty, getSpecificProperty, getAllPropertiesbyArea } from '../controllers/visitor.controller.js';
import { verifyJWT } from '../middlewares/auth.js';

const visitorRouter = router();

visitorRouter.get('/property', getAllProperties)
visitorRouter.get('/property/area', getAllPropertiesbyArea)



export { visitorRouter }

/*
GET visitor/property ==> get all nearby properties


*/
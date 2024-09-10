import router from 'express';
import { getAllProperties, getSpecificProperty } from '../controllers/visitor.controller.js';
import { verifyJWT } from '../middlewares/auth.js';

const visitorRouter = router();

visitorRouter.get('/property', getAllProperties)
visitorRouter.get('/property/:id', getSpecificProperty)



export { visitorRouter }

/*
GET visitor/property ==> get all nearby properties


*/
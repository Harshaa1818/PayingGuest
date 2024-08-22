import router from 'express';
import { verifyJWT } from '../middlewares/auth.js';
import { getAllProperties, addProperty, updateProperty, deleteProperty } from '../controllers/owner.controller.js'

const ownerRouter = router();

ownerRouter.get('/', verifyJWT, getAllProperties)
ownerRouter.post('/addproperty', verifyJWT, addProperty)
ownerRouter.patch('/updateproperty/:id', verifyJWT, updateProperty)
ownerRouter.delete('/deleteproperty/:id', verifyJWT, deleteProperty)



export { ownerRouter }
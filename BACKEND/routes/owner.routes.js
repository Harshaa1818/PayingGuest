import router from 'express';
import { verifyJWT } from '../middlewares/auth.js';
import { getAllOwnerProperties, addProperty, updateProperty, deleteProperty } from '../controllers/owner.controller.js'

const ownerRouter = router();

ownerRouter.get('/', verifyJWT, getAllOwnerProperties)
ownerRouter.post('/addproperty', verifyJWT, addProperty)
ownerRouter.put('/updateproperty/:id', verifyJWT, updateProperty)
ownerRouter.delete('/deleteproperty/:id', verifyJWT, deleteProperty)



export { ownerRouter }

/*
GET owner/pending ==> get all properties
POST owner/addproperty ==> add a property
PUT owner/update/:id ==> update a property other than status
DELETE owner/delete/:id ==> delete a property

*/
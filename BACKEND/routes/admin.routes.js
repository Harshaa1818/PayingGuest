import router from 'express';
import { getAllProperty, getPendingProperties, approveProperty, deleteProperty } from '../controllers/property.controller';
import { rollCheck } from '../middlewares/rolecheck'
import { verifyJWT } from '../middlewares/auth'

const adminRouter = router();

adminRouter.use(rollCheck('admin'));

adminRouter.get('/',verifyJWT, getAllProperty);
adminRouter.get('/pending', verifyJWT, getPendingProperties);
adminRouter.post('/approve/:id', verifyJWT, approveProperty);
adminRouter.delete('/delete/:id', verifyJWT, deleteProperty);

export { adminRouter }
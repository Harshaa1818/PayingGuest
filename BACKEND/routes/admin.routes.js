import router from 'express';
import { getAllProperties, getPendingProperties, approveProperty, deleteProperty } from '../controllers/admin.controller.js';
import { rollCheck } from '../middlewares/rolecheck.js'
import { verifyJWT } from '../middlewares/auth.js'

const adminRouter = router();

adminRouter.use(rollCheck('admin'));

adminRouter.get('/',verifyJWT, getAllProperties );
adminRouter.get('/pending', verifyJWT, getPendingProperties);
adminRouter.post('/approve/:id', verifyJWT, approveProperty);
adminRouter.delete('/delete/:id', verifyJWT, deleteProperty);

export { adminRouter }
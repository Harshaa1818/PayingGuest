import router from 'express';
import { getAllProperty } from '../controllers/property.controller';

const adminRouter = router();

adminRouter.use(rollCheck('admin'));

adminRouter.get('/', getAllProperty);
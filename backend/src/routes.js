import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/upload';

import SessionController from './controllers/SessionControler';
import UserController from './controllers/UserController';
import SpotController from './controllers/SpotController';
import DashboardController from './controllers/DashboardController';
import BookingController from './controllers/BookingController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:id/bookings', BookingController.store);

export default routes;

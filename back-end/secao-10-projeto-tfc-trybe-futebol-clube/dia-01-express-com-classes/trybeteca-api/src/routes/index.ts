import { Router } from 'express';
import bookRouter from './book.routes';
import usersRouter from './users.routes';
import LoginValidation from '../middlewares/LoginValidation';

const router = Router();
  
router.use('/books', LoginValidation.validateLogin, bookRouter);
router.use('/users', usersRouter);

export default router;
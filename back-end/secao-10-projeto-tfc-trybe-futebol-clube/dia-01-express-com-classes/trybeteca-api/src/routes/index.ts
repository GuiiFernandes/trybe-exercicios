import { Router } from 'express';
import bookRouter from './book.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/books', bookRouter);
router.use('/users', usersRouter);

export default router;
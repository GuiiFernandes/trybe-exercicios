import { Router } from 'express';
import transactionsController from '../controllers/transactions.controller';
import authMiddleware from '../middlewares/auth.middle';

const router = Router();

router.use(authMiddleware);
router.get('/', transactionsController.list);
router.get('/:id', transactionsController.searchId);
router.post('/', transactionsController.create);

export default router;
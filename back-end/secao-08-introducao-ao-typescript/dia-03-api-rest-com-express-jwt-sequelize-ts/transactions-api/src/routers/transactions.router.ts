import { Router } from 'express';
import transactionsController from '../controllers/transactions.controller';

const router = Router();

router.get('/', transactionsController.list);
router.get('/:id', transactionsController.searchId);
router.post('/', transactionsController.create);

export default router;
import { Router } from 'express';
import UsersController from '../controllers/UserController';
import LoginValidation from '../middlewares/LoginValidation';

const userController = new UsersController();

const router = Router();

router.post('/login', (req, res) => userController.login(req, res));

router.post('/', (req, res) => userController.createUser(req, res));

router.use(LoginValidation.validateLogin);

router.get('/', (req, res) => userController.getAllUsers(req, res));

router.get('/:id', (req, res) => userController.getUserById(req, res));

export default router;

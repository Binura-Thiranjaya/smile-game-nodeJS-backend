//Routes
import express from 'express';

const router = express.Router();

import { getUsersController, getUserController, addUserController,getUserByIDController, updateUserController } from '../controllers/users.js';

router.get('/', getUsersController);
router.post('/login', getUserController);
router.post('/register', addUserController);
router.get('/:id', getUserByIDController);
router.put('/update/:id', updateUserController);



export default router;

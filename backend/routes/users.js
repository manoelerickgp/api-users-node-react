import express from 'express';
import { getUsers, addUser} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/save', addUser);


export default router;
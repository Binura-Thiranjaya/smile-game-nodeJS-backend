//Routes dare
import express from 'express';

const router = express.Router();

import { getDaresController, getDareController } from '../controllers/dares.js';

router.get('/', getDaresController);
router.get('/:id', getDareController);
router.get('/print', (req, res) => {
    res.send('Welcome to SMILE GAME')
    }
)

export default router;
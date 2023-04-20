import express from 'express';
import { hostController } from '../controllers';

const router = express.Router();

// Hosts
router.post('/', hostController.createHost);

export default router;

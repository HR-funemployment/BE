import express from 'express';
import { draftController } from '../controllers';

const router = express.Router();

// Drafts
router.get('/drafts', draftController.getDrafts);
router.get('/drafts/:draftId', draftController.getDraftById);
router.post('/drafts', draftController.createDraft);

export default router;

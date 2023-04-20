import { Request, Response } from 'express';
import logger from '../middleware/logger';

export default {
  createDraft: async (req: Request, res: Response): Promise<void> => {
    logger.info('Creating new draft...');
  },
  getDrafts: async (req: Request, res: Response): Promise<void> => {
    logger.info('Getting drafts...');
  },
  getDraftById: async (req: Request, res: Response): Promise<void> => {
    logger.info('Getting draft by ID...');
  },
};

import { Request, Response } from 'express';
import logger from '../middleware/logger';

export default {
  createHost: async (req: Request, res: Response): Promise<void> => {
    logger.info('Creating new host...');
  },
};

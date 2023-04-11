import { Request, Response } from 'express';
import logger from '../middleware/logger';

export default {
  login: async (req: Request, res: Response): Promise<void> => {
    logger.info('Testing');
  },
};

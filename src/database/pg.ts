import { Pool } from 'pg';
import dotenv from 'dotenv';
import logger from '../middleware/logger';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL || '' });

pool.on('error', (err) => {
  logger.warn('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.on('connect', () => {
  logger.info('pool connected');
});

export default pool;

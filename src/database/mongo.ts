import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import logger from '../middleware/logger';

dotenv.config();

const MONGO_URI = process.env.MONGO_DATABASE_URL || '';

const mongoConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    logger.error((error as Error).message);
    process.exit(1);
  }
};

export default mongoConnect;

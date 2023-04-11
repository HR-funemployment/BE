//  ====== Imports =========
import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import mongoConnect from './database/mongo';
import logger from './middleware/logger';
import morgan from './middleware/morgan';

//  ====== Constants =========
dotenv.config();
const app: Application = express();
const port = process.env.Port || 8080;

//  ====== Database =========
mongoConnect();

//  ====== Middleware =========
app.use(express.json());
app.use(cors());
app.use(morgan);

app.use('/', routes());

app.listen(port, () => {
  logger.info(`Server is running at port ${port}`);
});

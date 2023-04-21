//  ====== Imports ============
import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import createSocketServer from './sockets/socket';
import logger from './middleware/logger';
import morgan from './middleware/morgan';

//  ====== Constants ==========
dotenv.config();
const app: Application = express();
const port = process.env.Port || 3001;

//  ====== Middleware =========
app.use(express.json());
app.use(cors());
app.use(morgan);

app.use('/api', routes());

//  ====== Socket server =========
const server = app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});

createSocketServer(server);

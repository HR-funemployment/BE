import { Server as SocketIOServer, Socket } from 'socket.io';
import { Application } from 'express'
import logger from '../middleware/logger';


export default function createSocketServer(expressServer: ReturnType<Application['listen']>): SocketIOServer {
  const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
  };

  const io = new SocketIOServer(expressServer, {
    cors: corsOptions,
  });

  io.use((socket: any, next) => {
    const customId = socket.handshake.query.customId as string;
    if (!customId) {
      return next(new Error('Custom ID is missing'));
    }
    socket.id = customId;
    next();
  });

  io.on('connection', (socket: Socket) => {
    logger.info(`Client connected with custom ID: ${socket.id}`);

    socket.on('send-message', (message: string) => {
      logger.info('Message received:', message);
      const MessageDetail = {
        id: socket.id,
        text: message,
        created: new Date()
      }
      io.emit('message', MessageDetail);
    });

    socket.on('disconnect', () => {
      logger.info('A user disconnected');
    });
  });

  return io;
}

import { Server as SocketIOServer, Socket } from 'socket.io';
import { Server as HTTPServer } from 'http';
import logger from '../middleware/logger';

export default function createSocketServer(httpServer: HTTPServer): SocketIOServer {
  const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  };

  const io = new SocketIOServer(httpServer, {
    cors: corsOptions,
  });

  io.on('connection', (socket: Socket) => {
    logger.info('A user connected');

    socket.on('send-message', (message: string) => {
      logger.info('Message received:', message);
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      logger.info('A user disconnected');
    });
  });

  return io;
}

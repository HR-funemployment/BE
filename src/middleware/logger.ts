import winston, { format, Logger } from 'winston';

export interface LogEntry {
  level: string;
  message: string;
  timestamp: string;
}

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const loggerLevel = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'blue',
  debug: 'white',
};

winston.addColors(colors);

const logFormat = format.printf((info) => {
  const { timestamp, level, message } = info as LogEntry;
  return `${timestamp} ${level}: ${message}`;
});

const logger: Logger = winston.createLogger({
  level: loggerLevel(),
  levels,
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.colorize({ all: true }),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: 'logs/all.log' }),
  ],
});

export default logger;

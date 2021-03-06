import winston from 'winston'

export class Logger {
  private static instance: winston.Logger
  static getInstance(): winston.Logger {
    if (!Logger.instance) {
      return winston.createLogger({
        level: 'debug',
        levels: {
          error: 0,
          warn: 1,
          info: 2,
          http: 3,
          debug: 4
        },
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
          winston.format.printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`
          )
        ),
        transports: [
          new winston.transports.Console(),
          new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: winston.format.simple()
          }),
          new winston.transports.File({
            filename: 'logs/all.log',
            format: winston.format.simple()
          })
        ]
      })
    }
    return Logger.instance
  }
}

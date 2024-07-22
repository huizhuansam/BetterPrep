import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    switch (exception.code) {
      case 11000: // duplicated title
        response.status(HttpStatus.BAD_REQUEST).json({
          message: ['title should be unique'],
          error: 'Bad Request',
          statusCode: HttpStatus.BAD_REQUEST,
        });
        break;
      default:
        response.status(HttpStatus.INTERNAL_SERVER_ERROR);
        break;
    }
  }
}

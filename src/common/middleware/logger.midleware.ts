import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {

    console.log(`Request URL = ${req.url}`);
    console.log(`Request METHOD = ${req.method}`);
    next();
  }
}

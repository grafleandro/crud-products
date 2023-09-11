import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    if (!req.headers.authorization || req.headers.authorization != process.env.AUTH_TOKEN) {
      throw new ForbiddenException('Acesso negado.');
    }
    
    next();
  }
}

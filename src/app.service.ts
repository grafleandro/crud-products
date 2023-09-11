import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Injectable()
export class AppService {
  getHealth(): object {
    return {
      "status": "up"
    }
  }
}

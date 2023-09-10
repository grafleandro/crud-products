import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Injectable()
export class AppService {
  getHealth(@Res() res: Response): object {
    return res.status(HttpStatus.OK).send({
      "status": "up"
  })
  }
}

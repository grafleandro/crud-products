import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';

@ApiTags("Utils")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  getHealth(@Res() res: Response): object {
    return this.appService.getHealth(res);
  }
}

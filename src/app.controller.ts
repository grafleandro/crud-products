import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Utils")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  getHello(): string {
    return this.appService.getHello();
  }
}

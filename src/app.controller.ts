import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getDance(): string {
    return this.appService.getDance();
  }

  @Post()
  postHell(): string {
    return 'Hi Hello';
  }
}

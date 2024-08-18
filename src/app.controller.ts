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

  @Get()
  summer(): string {
    return this.appService.getDance();
  }

  @Get()
  automn(): string {
    return this.appService.getDance();
  }

  @Get()
  atom(): string {
    return this.appService.getDance();
  }

  @Get()
  able(): string {
    return this.appService.getDance();
  }

  @Get()
  powerful(): string {
    return this.appService.getDance();
  }

  @Get()
  grace(): string {
    return this.appService.getDance();
  }

  @Get()
  jesuss(): string {
    return this.appService.getDance();
  }


  @Get()
  jesussessssssssssssssssssss(): string {
    return this.appService.getDance();
  }

  @Post()
  postHell(): string {
    return 'Hi Hello';
  }
}

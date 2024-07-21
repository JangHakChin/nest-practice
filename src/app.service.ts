import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World mansl!';
  }

  getDance(): string {
    return 'Hello World mansl!';
  }

  summer(): string {
    return 'Hello Summer!';
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    new Promise(() => {
      throw new Error('error');
    }).then(() => {
      console.log('OK');
    });
    return this.appService.getHello();
  }
}

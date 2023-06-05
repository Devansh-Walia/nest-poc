import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('init')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(process.env);

    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return this.appService.getName();
  }
}

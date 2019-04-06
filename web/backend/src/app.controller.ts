import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PortionSizeDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/feed-now')
  feedNow(): string {
    return this.appService.feedNow();
  }

  @Post('/portion-size')
  async updatePortionSize(@Body() portionSizeDto: PortionSizeDto) {
    const { size } = portionSizeDto;

    return this.appService.updatePortionSize(size);
  }
}

import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PortionSizeDto, ScheduleDto } from './dto';

interface TSchedule {
  id: string;
  time: number;
}

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

  @Get('/portion-size')
  async getPortionSize() {
    return this.appService.getPortionSize();
  }

  @Post('/portion-size')
  async updatePortionSize(@Body() portionSizeDto: PortionSizeDto) {
    const { size } = portionSizeDto;

    return this.appService.updatePortionSize(size);
  }

  @Get('/schedules')
  getSchedules() {
    return this.appService.getSchedules();
  }

  @Post('/schedules')
  createOrUpdateSchedule(@Body() scheduleDto: ScheduleDto): TSchedule {
    const { id, time } = scheduleDto;

    return this.appService.createOrUpdateSchedule({
      id,
      time,
    });
  }

  @Delete('/schedules/:id')
  deleteSchedule(@Param('id') id: string) {
    return this.appService.deleteSchedule(id);
  }
}

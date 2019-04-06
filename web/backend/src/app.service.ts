import { Injectable } from '@nestjs/common';

interface TSchedule {
  id: string;
  time: number;
}

@Injectable()
export class AppService {
  private schedules = [];
  private portionSize = 50;

  getHello(): string {
    return 'Hello World!';
  }

  feedNow(): string {
    return 'Ok';
  }

  getPortionSize() {
    return { size: this.portionSize };
  }

  updatePortionSize(size: number) {
    this.portionSize = size;

    return { size };
  }

  getSchedules() {
    return this.schedules;
  }

  createOrUpdateSchedule(schedule: TSchedule) {
    const scheduleToUpdate = this.schedules.find(
      item => item.id === schedule.id,
    );

    if (scheduleToUpdate) {
      Object.assign(scheduleToUpdate, schedule);

      return schedule;
    }

    this.schedules.push(schedule);

    return schedule;
  }

  deleteSchedule(id: string) {
    this.schedules = this.schedules.filter(item => item.id !== id);

    return id;
  }
}

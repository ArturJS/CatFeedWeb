import axios from 'axios';
import moment from 'moment';

class Api {
  constructor() {
    const { hostname, protocol } = window.location;

    this._axios = axios.create({
      baseURL: `${protocol}//${hostname}:3001`
    });
  }

  async feedNow() {
    await this._axios.post('/feed-now');
  }

  async getPortionSize() {
    const { data } = await this._axios.get('/portion-size');
    const { size } = data;

    return size;
  }

  async updatePortionSize(portionSize) {
    await this._axios.post('/portion-size', { size: portionSize });
  }

  async getSchedules() {
    const { data: schedules } = await this._axios.get('/schedules');

    return schedules.map(({ id, time }) => ({ id, time: moment(time) }));
  }

  async createOrUpdateSchedule({ id, time }) {
    await this._axios.post('/schedules', { id, time: +time });
  }

  async deleteSchedule(id) {
    await this._axios.delete(`/schedules/${id}`);
  }
}

export const api = new Api();

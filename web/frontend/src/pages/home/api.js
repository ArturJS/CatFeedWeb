import axios from 'axios';
import moment from 'moment';

class Api {
  constructor() {
    const { hostname, protocol } = window.location || {};

    this._axios = axios.create({
      baseURL: `${protocol}//${hostname}:3001`
    });
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

window.api = api;

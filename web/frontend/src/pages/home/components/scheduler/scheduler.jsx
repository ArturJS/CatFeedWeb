import React, { useState, useEffect } from 'react';
import { Button, List, TimePicker, Modal } from 'antd';
import moment from 'moment';
import nanoid from 'nanoid';
import { api } from '../../api';
import './scheduler.scss';

const timeFormat = 'HH:mm';

const useScheduler = () => {
  const [schedules, setSchedules] = useState([]);
  const addSchedule = () => {
    const schedule = {
      id: nanoid(),
      time: moment()
    };
    setSchedules(oldSchedules => [...oldSchedules, schedule]);

    api.createOrUpdateSchedule(schedule);
  };
  const updateSchedule = (id, time) => {
    setSchedules(oldSchedules => {
      const itemToUpdate = oldSchedules.find(item => item.id === id);

      if (!itemToUpdate) {
        return oldSchedules;
      }

      itemToUpdate.time = time;

      api.createOrUpdateSchedule(itemToUpdate);

      return [...oldSchedules];
    });
  };
  const removeSchedule = id => {
    const itemToRemove = schedules.find(item => item.id === id);

    if (!itemToRemove) {
      return;
    }

    Modal.confirm({
      title: 'Подтвердите ваше действие',
      content: `Вы точно уверены, что хотите удалить запись на ${itemToRemove.time.format(
        'HH:mm'
      )}?`,
      onOk: async () => {
        setSchedules(oldSchedules =>
          oldSchedules.filter(item => item.id !== id)
        );
        await api.deleteSchedule(id);
      }
    });
  };

  useEffect(() => {
    const fetchSchedules = async () => {
      const schedules = await api.getSchedules();

      setSchedules(schedules);
    };

    fetchSchedules();
  }, []);

  return {
    schedules,
    addSchedule,
    updateSchedule,
    removeSchedule
  };
};

export const Scheduler = () => {
  const {
    schedules,
    addSchedule,
    updateSchedule,
    removeSchedule
  } = useScheduler();
  const isEmptySchedule = schedules.length === 0;

  return (
    <div className="scheduler">
      <h2>Расписание</h2>
      {isEmptySchedule ? (
        <p>У вас пока нет расписания.</p>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={schedules}
          renderItem={item => (
            <List.Item key={item.id}>
              <TimePicker
                format={timeFormat}
                onChange={time => updateSchedule(item.id, time)}
                value={item.time}
              />
              <Button
                type="danger"
                icon="close-circle"
                onClick={() => removeSchedule(item.id)}
              />
            </List.Item>
          )}
        />
      )}

      <Button type="primary" onClick={addSchedule}>
        Добавить
      </Button>
    </div>
  );
};

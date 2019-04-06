import React from 'react';
import { Button, notification } from 'antd';
import { api } from '../../api';

const showInfo = async () => {
  await api.feedNow();

  notification.success({
    message: 'Успех!',
    description: 'Ваш запрос был успешно отправлен.'
  });
};

export const FeedNow = () => {
  return (
    <div className="feed-now">
      <Button type="primary" onClick={showInfo}>
        Покормить сейчас
      </Button>
    </div>
  );
};

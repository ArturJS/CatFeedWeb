import React from 'react';
import { Button, notification } from 'antd';

const showInfo = () => {
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

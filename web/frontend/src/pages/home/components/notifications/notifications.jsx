import React, { useState } from 'react';
import { Switch, Input } from 'antd';

export const Notifications = ({ onChange }) => {
  const [isNotify, setIsNotify] = useState(true);
  const [phone, setPhone] = useState('');

  return (
    <div className="notifications">
      <h3>
        Критические уведомления {isNotify ? 'включены' : 'выключены'}
        &nbsp;&nbsp;
        <Switch defaultChecked={isNotify} onChange={setIsNotify} />
      </h3>
      <p>Номер телефона для нотификаций</p>
      <div>
        <Input
          placeholder="Ваш номер телефона"
          defaultValue={phone}
          onChange={setPhone}
        />
      </div>
    </div>
  );
};

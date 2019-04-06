import React from 'react';
import { Button } from 'antd';
import { IconSlider } from './components';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="page-content">
        <h1>Кормушка для кота</h1>
        <div>
          <Button type="primary">Покормить сейчас</Button>
        </div>

        <div>
          <h2>Настройки</h2>
          <div>
            <h3>Размер порции</h3>
            <IconSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

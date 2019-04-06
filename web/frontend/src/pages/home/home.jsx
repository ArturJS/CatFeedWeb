import React from 'react';
import { Button } from 'antd';
import { IconSlider, Scheduler } from './components';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="page-content">
        <h1>Кормушка для кота</h1>
        <section>
          <Button type="primary">Покормить сейчас</Button>
        </section>

        <section>
          <h2>Настройки</h2>
          <div>
            <h3>Размер порции</h3>
            <IconSlider />
          </div>
        </section>

        <section>
          <Scheduler />
        </section>
      </div>
    </div>
  );
};

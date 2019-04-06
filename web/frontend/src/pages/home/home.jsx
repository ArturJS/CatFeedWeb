import React from 'react';
import { FeedNow, IconSlider, Scheduler, Notifications } from './components';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="page-content">
        <h1>Кормушка для кота</h1>
        <section>
          <FeedNow />
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

        <section>
          <Notifications />
        </section>
      </div>
    </div>
  );
};

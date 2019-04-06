import React, { useState, useEffect } from 'react';
import { Slider, Icon } from 'antd';
import { api } from '../../api';
import './icon-slider.scss';

const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const updatePortionSize = debounce(
  async portionSize => await api.updatePortionSize(portionSize),
  300
);

export const IconSlider = ({ onChange }) => {
  const max = 100;
  const min = 0;
  const mid = (max - min) / 2;
  const [value, setValue] = useState(mid);
  const preColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
  const nextColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
  const setPortionSize = async portionSize => {
    setValue(portionSize);
    await updatePortionSize(portionSize);
  };

  useEffect(() => {
    const fetchPortionSize = async () => {
      const size = await api.getPortionSize();

      setValue(size);
    };

    fetchPortionSize();
  }, []);

  return (
    <div className="icon-slider">
      <div className="current-value">{value}%</div>
      <div className="slider-wrapper">
        <Icon style={{ color: preColor }} type="frown-o" />
        <Slider onChange={setPortionSize} value={value} />
        <Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    </div>
  );
};

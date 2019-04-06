import React, { useState } from 'react';
import { Slider, Icon } from 'antd';
import './icon-slider.scss';

export const IconSlider = ({ onChange }) => {
  const max = 100;
  const min = 0;
  const mid = (max - min) / 2;
  const [value, setValue] = useState(mid);
  const preColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
  const nextColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';

  return (
    <div className="icon-slider">
      .<div className="current-value">{value}%</div>
      <div className="slider-wrapper">
        <Icon style={{ color: preColor }} type="frown-o" />
        <Slider onChange={setValue} value={value} />
        <Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    </div>
  );
};

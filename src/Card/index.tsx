import React, { memo } from 'react';
import './index.less';
import type { CardProps } from './type';

const Card = ({ title, children }: CardProps) => {
  return (
    <div className='sotCard'>
      {title && <div className='title'>{title}</div>}
      <div className='content'>{children}</div>
    </div>
  );
};

export default memo(Card);

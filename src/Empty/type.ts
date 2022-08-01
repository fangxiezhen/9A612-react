import type { ReactNode } from 'react';

import { StyledProps } from '../common';

export const enum IconType {
  Article = 'article',
  Cry = 'cry',
  Data = 'data',
  Email = 'email',
  Image = 'image',
  Message = 'message',
  Money = 'money',
  Smile = 'smile',
  Video = 'video',
  Vote = 'vote',
  Warning = 'warning',
}

export interface EmptyProps extends StyledProps {
  /**
   * @description 点击事件
   */
  onClick?: () => void;
  /**
   * @description 自定义描述内容
   * @default '暂无数据'
   */
  title?: ReactNode;
  /**
   * @description 空状态展示内置的 svg；已有article、cry、data、email、image、message、money
   * @default 'data'
   */
  type?: IconType;
}

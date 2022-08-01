import { CSSProperties } from 'react';

/**
 * @description 常规样式 props
 */
export interface StyledProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: CSSProperties;
}

/**
 * @description 常规值的类型
 */
export type CommonValue = string | number;

/**
 * @description 常规对象的类型
 */
export type CommonObject = Record<CommonValue, unknown>;

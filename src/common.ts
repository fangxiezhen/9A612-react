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

/**
 * @description 合并两个类型
 */
export type Merge<T extends object, U extends object> = {
  [P in keyof (T & U)]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never;
};

import type { ReactNode } from 'react';
import type { MutableRefObject } from 'react';
import type { PrimaryTableCol } from 'tdesign-react';
import type { FormInstanceFunctions } from 'tdesign-react';

import type { Merge, StyledProps } from '../common';

/**
 * 目前支持渲染的编辑组件类型
 */
export type RenderType = 'select' | 'input' | 'switch';

/**
 * 每个编辑组件值发生改变的回调
 */
export type ItemChange<T> = ({
  value,
  data,
  rowIndex,
}: {
  /**
   * @description 改变后的值
   */
  value: unknown;
  /**
   * @description 改变后新的 data
   */
  data: T[];
  /**
   * @description 行下标
   */
  rowIndex: number;
}) => T[];

/**
 * 列配置
 */
export type ColumnsType<T> = Merge<
  PrimaryTableCol,
  {
    /**
     * @description 单元格渲染编辑组件类型
     */
    renderType?: RenderType;
    /**
     * @description 校验失败的错误提示
     */
    errorTip?: string;
    /**
     * @description 透传给组件内部的参数，有函数和对象两种类型
     */
    payload?:
      | (({ row, rowIndex, colIndex }: { row: T; rowIndex: number; colIndex: number }) => object)
      | object;
    /**
     * @description 校验函数，返回值为 true 说明校验成功
     */
    validate?: (value: any) => boolean;
    /**
     * @description 单元格的值发生改变的回调，返回新的表格值
     */
    onChange?: ItemChange<T>;
    /**
     * @description 是否展示红色必填标识
     * @default false
     */
    showRequire?: boolean;
  }
>;

export interface BaseEditTableProps<T> extends StyledProps {
  /**
   * @description 可编辑表格的值
   * @default []
   */
  data: T[];
  /**
   * @description 列配置
   * @default []
   */
  columns: ColumnsType<T>[];
  /**
   * @description 添加时默认添加的数据，必填
   * @default {}
   * @requires true
   */
  defaultAddData?: T;
  /**
   * @description 表格值发生变化的回调，参数为最新的值
   */
  onChange?: (data: T[]) => void;
  /**
   * @description 最少有多少条，低于这个数字的删除按钮会被禁用
   * @default 0
   */
  minLength?: number;
  /**
   * @description 最多有多少条，高于这个数字后，添加按钮会被禁用
   * @default 9999
   */
  maxLength?: number;
  /**
   * @description 添加按钮的内部内容
   * @default '添加'
   */
  addButtonText?: ReactNode;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
}

/**
 * ref 的值
 */
export interface BaseEditTableInstance {
  /**
   * @description 校验整个表格的函数
   * @default --

   */
  validateAll: () => boolean;
  /**
   * @description 清空表单内部的错误状态
   * @default --
   */
  clearErrorState: () => void;
}

export interface ErrorType {
  rowKey: number;
  colKey: string;
}

/**
 * @description 当此组件放在 form 表单中时，可使用此 api 并传入相关 ref 进行表单校验
 */
export interface UseValidateFormAndTableProps {
  /**
   * @description 表单的 ref
   * @default --
   */
  formRef: MutableRefObject<FormInstanceFunctions>;
  /**
   * @description 可编辑表格的 ref，可传入多个
   * @default --
   */
  BaseEditTableRef: MutableRefObject<BaseEditTableInstance>[];
}

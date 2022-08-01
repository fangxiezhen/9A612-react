import type { ReactNode } from 'react';
import type { InputProps } from 'tdesign-react';

import type { CommonObject, CommonValue, StyledProps } from '../common';

/**
 * @description 默认选择项的单条类型
 */
type SelectListValue = {
  /**
   * @description 键
   */
  value: CommonValue;
  /**
   * @description 展示的内容
   */
  label: CommonValue;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
};

/**
 * @description add 为左侧单选或者全选，delete 为右侧点击删除或者清空，cancel 为点击左侧已选中的项来取消选择或者点击全不选
 */
export const enum ChangeType {
  Add = 'add',
  Delete = 'delete',
  Cancel = 'cancel',
}

/**
 * @param T 数据列表的单条数据类型
 */
export interface SelectListProps<T extends CommonObject = SelectListValue> extends StyledProps {
  /**
   * @description 穿梭框左侧数据源
   * @default []
   */
  dataSource: T[];
  /**
   * @description 是否处于禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否具备数据源展示时根据搜索关键词的高光，仅在默认渲染时生效
   * @default true
   */
  hasHighlight?: boolean;
  /**
   * @description 透传给 input 搜索框的参数
   */
  inputProps?: InputProps;
  /**
   * @description 是否在添加数据的时候，从最上方头部插入
   * @default false
   */
  isReverse?: boolean;
  /**
   * @description 点击搜索时的 loading
   * @default false
   */
  loading?: boolean;
  /**
   * @description 因用户操作而使得穿梭框右侧的值发生改变的回调
   */
  onChange?: (changeParams: ChangeParams<T>) => void;
  /**
   * @description 搜索时的回调
   */
  onSearch?: (value: string) => void;
  /**
   * @description 自定义渲染数据源列表的每一项
   */
  renderSourceItem?: (record: T) => ReactNode;
  /**
   * @description 自定义渲染已选择列表的每一项
   */
  renderValueItem?: (record: T) => ReactNode;
  /**
   * @description 列表的键，支持字符串或者函数返回的形式传入
   * @default 'value'
   */
  rowKey?: string;
  /**
   * @description 数据源列表空时的展示
   */
  sourceEmpty?: ReactNode;
  /**
   * @description 是否展示搜索功能
   * @default false
   */
  showSearch?: boolean;
  /**
   * @description 左侧数据源框的标题
   * @default '可选'
   */
  sourceTitle?: ReactNode;
  /**
   * @description 穿梭框右侧已选中数据
   * @default []
   */
  value: T[];
  /**
   * @description 已选项列表空时的展示
   */
  valueEmpty?: ReactNode;
  /**
   * @description 右侧数据框的标题
   * @default '已选择x条'
   */
  valueTitle?: ReactNode;
}

/**
 * @param T 每一项的数据的类型
 */
export interface ChangeParams<T> {
  /**
   * @description 值改变的方式，
   */
  changeType: ChangeType;
  /**
   * @description 发生改变的值的具体数据
   */
  changeValue: T[];
  /**
   * @description 更新后新的值
   */
  value: T[];
}

export interface SelectListItemProps<T extends CommonObject = SelectListValue>
  extends SelectListProps<T> {
  title: ReactNode;
  list: T[];
  isValueList?: boolean;
  empty?: ReactNode;
  render?: (record: T) => ReactNode;
  rowKey: string;
}

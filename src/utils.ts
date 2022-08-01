import { isEqual } from 'lodash';

/**
 * @description 一个用来判断两个数组是否符合完全包含关系的函数
 */
export const getIsContained = ({
  father,
  child,
  key,
}: {
  /**
   * @description 父集
   */
  father: unknown[];
  /**
   * @description 子集
   */
  child: unknown[];
  /**
   * @description 键值，如果数组内的元素是对象，且不需要深比较，则可以传入
   */
  key?: string;
}) => {
  if (!Array.isArray(father) || !Array.isArray(child) || father.length < child.length) {
    return false;
  }

  return child.every((i) => father.some((k) => (key ? k[key] === i[key] : isEqual(k, i))));
};

/**
 * @description 数组过滤，把一个数组里包含另外一个数组里的内容都剔除，返回过滤后的数组
 * @param needFilterArray 需要过滤的源数组
 * @param conditionArray “滤网”数组
 */
export const filterArrayOfOther = (needFilterArray: unknown[], conditionArray: unknown[]) => {
  if (!Array.isArray(needFilterArray) || !Array.isArray(conditionArray)) {
    console.warn('filterArrayOfOther 函数使用有误');
    return [];
  }

  return needFilterArray.filter((i) => {
    return !conditionArray.some((k) => isEqual(k, i));
  });
};

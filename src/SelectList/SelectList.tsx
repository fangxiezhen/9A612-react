import cx from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { CaretRightIcon } from 'tdesign-icons-react';

import SelectListItem from './SelectListItem';
import './style/index.less';
import type { SelectListProps } from './type';

function SelectList(props: SelectListProps) {
  const {
    className,
    dataSource = [],
    disabled = false,
    inputProps = {},
    isReverse = false,
    rowKey = 'value',
    sourceTitle = `可选${props.dataSource?.length || 0}条`,
    renderSourceItem,
    renderValueItem,
    valueTitle = `已选择${props.value?.length || 0}条`,
    style,
    sourceEmpty,
    value,
    valueEmpty,
  } = props;
  return (
    <div className={cx('sot-selectList', className)} style={style}>
      <SelectListItem
        {...props}
        disabled={disabled}
        inputProps={inputProps}
        isReverse={isReverse}
        rowKey={rowKey}
        list={dataSource}
        title={sourceTitle}
        render={renderSourceItem}
        empty={sourceEmpty}
      />
      <div className="omui-transfer__select">
        <CaretRightIcon size={12} />
      </div>
      <SelectListItem
        {...props}
        isValueList
        disabled={disabled}
        inputProps={inputProps}
        isReverse={isReverse}
        rowKey={rowKey}
        list={value}
        title={valueTitle}
        render={renderValueItem}
        empty={valueEmpty}
      />
    </div>
  );
}

export default memo(SelectList);

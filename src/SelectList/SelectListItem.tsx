import cx from 'classnames';
import { uniqBy } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { DeleteIcon, SearchIcon } from 'tdesign-icons-react';
import { Checkbox, Input, InputAdornment, Popconfirm } from 'tdesign-react';

import Empty from '../Empty';
import Loading from '../Loading';
import { filterArrayOfOther, getIsContained } from '../utils';
import './style/index.less';
import type { SelectListItemProps } from './type';
import { ChangeType } from './type';

const SelectListItem = ({
  title,
  showSearch,
  inputProps,
  list,
  isValueList,
  disabled,
  empty,
  onSearch,
  onChange,
  dataSource,
  value,
  rowKey,
  isReverse,
  render,
  loading,
}: SelectListItemProps<any>) => {
  const hasSelectedAll = useMemo(
    () => getIsContained({ father: value, child: dataSource, key: rowKey }),
    [value, dataSource],
  );
  const [keyword, setKeyword] = useState('');

  // 这里使用 callback 的目的是为了防止搜索词一改变，列表在未搜索的情况下就直接高亮了
  const renderBody = useCallback(() => {
    if (loading && !isValueList)
      return (
        <div className="sot-selectList__item__loading">
          <Loading type="soundEffect" />
        </div>
      );
    if (list.length)
      return (
        <ul className="sot-selectList__item__ul">
          {list.map((item) => (
            <li key={item[rowKey]} className={cx('sot-selectList__item__li')}>
              <label
                className={cx(
                  'sot-selectList__item__label',
                  value.some((val) => item[rowKey] === val[rowKey]) &&
                    !isValueList &&
                    'sot-selectList__item__label-selected',
                )}
              >
                {typeof render === 'function' ? (
                  render(item)
                ) : (
                  <span
                    className="sot-selectList__item__name"
                    dangerouslySetInnerHTML={{
                      __html: keyword
                        ? item.label.replace(
                            new RegExp(keyword, 'g'),
                            `<span style="color:#279EF3;">${keyword}</span>`,
                          )
                        : item.label,
                    }}
                  />
                )}
                {!disabled ? (
                  isValueList ? (
                    <a
                      className="sot-selectList__item__delete"
                      onClick={() => {
                        onChange?.({
                          changeType: ChangeType.Delete,
                          changeValue: [item],
                          value: value.filter((val) => val[rowKey] !== item[rowKey]),
                        });
                      }}
                    >
                      <DeleteIcon />
                    </a>
                  ) : (
                    <Checkbox
                      checked={value.some((val) => item[rowKey] === val[rowKey])}
                      onChange={(checked) => {
                        onChange?.(
                          checked
                            ? {
                                changeType: ChangeType.Add,
                                changeValue: [item],
                                value: isReverse ? [item, ...value] : [...value, item],
                              }
                            : {
                                changeType: ChangeType.Delete,
                                changeValue: [item],
                                value: value.filter((val) => val[rowKey] !== item[rowKey]),
                              },
                        );
                      }}
                    />
                  )
                ) : null}
              </label>
            </li>
          ))}
        </ul>
      );
    return empty || <Empty title={'暂无数据'} />;
  }, [loading, value, list]);

  const renderHeaderAction = () => {
    if (disabled) return null;
    if (isValueList)
      return list.length ? (
        <a>
          <Popconfirm
            onConfirm={() => {
              onChange?.({ changeType: ChangeType.Delete, changeValue: value, value: [] });
            }}
            content="确认是否清空"
          >
            清空
          </Popconfirm>
        </a>
      ) : (
        <a className={cx('sot-selectList__item__clear-disabled')}>清空</a>
      );
    return (
      <a
        className={cx('sot-selectList__item__selectAll')}
        onClick={() => {
          const allSelectValue = uniqBy(
            isReverse ? [...value, ...dataSource] : [...dataSource, ...value],
            rowKey,
          );
          onChange?.(
            hasSelectedAll
              ? {
                  changeType: ChangeType.Cancel,
                  changeValue: dataSource,
                  value: filterArrayOfOther(value, dataSource),
                }
              : {
                  changeType: ChangeType.Add,
                  changeValue: filterArrayOfOther(allSelectValue, value),
                  value: allSelectValue,
                },
          );
        }}
      >
        {hasSelectedAll ? '全不选' : '全选'}
      </a>
    );
  };

  const handleSearch = () => {
    onSearch?.(keyword);
  };

  return (
    <div className="sot-selectList__item">
      <div className={cx('sot-selectList__item__header')}>
        <span className="sot-selectList__item__title">{title}</span>

        {showSearch && !isValueList && (
          <InputAdornment
            append={
              <div
                onClick={() => {
                  handleSearch();
                }}
              >
                <SearchIcon />
              </div>
            }
          >
            <Input
              onEnter={() => {
                handleSearch();
              }}
              {...inputProps}
              className={cx(inputProps?.className)}
              value={inputProps?.value ?? keyword}
              onChange={(val) => {
                setKeyword(val ? `${val}` : '');
                inputProps?.onChange?.(val);
              }}
            />
          </InputAdornment>
        )}
        {renderHeaderAction()}
      </div>
      <div className="sot-selectList__item__body">{renderBody()}</div>
    </div>
  );
};

export default React.memo(SelectListItem);

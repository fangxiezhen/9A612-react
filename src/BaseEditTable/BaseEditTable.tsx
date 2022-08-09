import cx from 'classnames';
import React, { ForwardedRef, ReactNode, forwardRef, useImperativeHandle, useState } from 'react';
import { AddIcon } from 'tdesign-icons-react';
import type { PrimaryTableCol } from 'tdesign-react';
import { Button, Input, Select, Switch, Table } from 'tdesign-react';

import './style/index.less';
import type { BaseEditTableInstance, BaseEditTableProps, ErrorType, ItemChange } from './type';

function BaseEditTable<T extends object = any>(
  {
    data = [],
    columns = [],
    defaultAddData,
    onChange,
    minLength = 0,
    maxLength = 9999,
    className,
    addButtonText,
    disabled,
  }: BaseEditTableProps<T>,
  ref: ForwardedRef<BaseEditTableInstance>,
) {
  const [errorList, setErrorList] = useState<ErrorType[]>([]);

  useImperativeHandle(ref, () => ({
    validateAll,
    clearErrorState: () => {
      setErrorList([]);
    },
  }));

  const validateAll = (): boolean => {
    let result = true;
    const newErrorList: ErrorType[] = [];
    data.forEach((rowItem, rowIndex) => {
      columns.forEach((columnItem) => {
        const validateResult = columnItem.validate
          ? columnItem.validate(rowItem[columnItem.colKey as keyof T])
          : true;
        if (!validateResult) {
          newErrorList.push({ rowKey: rowIndex, colKey: columnItem.colKey as string });
          result = false;
        }
      });
    });
    setErrorList(newErrorList);
    return result;
  };

  const handleChange = ({
    value,
    index,
    fieldName,
    validate,
    itemChange,
  }: {
    value: any;
    index: number;
    fieldName?: string;
    validate?: (value: any) => boolean;
    itemChange?: ItemChange<T>;
  }) => {
    const newData = [...data];
    newData[index][fieldName as keyof T] = value;

    const newErrorList = [...errorList];
    if (!validate || validate?.(value)) {
      const errorIndex = newErrorList.findIndex(
        (error) => error.rowKey === index && error.colKey === fieldName,
      );
      errorIndex > -1 && newErrorList.splice(errorIndex, 1);
    } else {
      !newErrorList.some((error) => error.colKey === fieldName && error.rowKey === index) &&
        newErrorList.push({ colKey: fieldName as string, rowKey: index });
    }
    setErrorList(newErrorList);
    // 触发表格整体 onChange 回调
    onChange?.(newData);
    // 触发单个单元格 onChange 回调
    itemChange?.({
      value,
      data: newData,
      rowIndex: index,
    });
  };

  /**
   * 渲染列函数
   */
  const getColumns = () => {
    const baseColumns: PrimaryTableCol<any>[] = columns.map((item) => {
      const column = { ...item };
      // 删除非 Table Columns 的多余配置
      delete column.errorTip;
      delete column.renderType;
      delete column.validate;
      delete column.onChange;
      delete column.showRequire;

      if (!item.renderType) return { ...column };
      return {
        ...column,
        cell: ({ row, rowIndex, colIndex }) => {
          const isError = errorList.some(
            ({ rowKey, colKey }) => rowKey === rowIndex && colKey === item.colKey,
          );
          const formatPayload =
            typeof item.payload === 'function'
              ? item.payload({ row, rowIndex, colIndex })
              : item.payload;

          switch (item.renderType) {
            case 'input':
              return (
                <Input
                  placeholder="请输入"
                  tips={isError && item.errorTip}
                  value={row[item.colKey as string]}
                  status={isError ? 'error' : 'default'}
                  {...formatPayload}
                  disabled={disabled}
                  onChange={(value) => {
                    handleChange({
                      value,
                      index: rowIndex,
                      fieldName: item.colKey,
                      validate: item.validate,
                      itemChange: item.onChange,
                    });
                  }}
                />
              );
            case 'select':
              return (
                <>
                  <Select
                    value={row[item.colKey as string]}
                    {...formatPayload}
                    disabled={disabled}
                    onChange={(value) => {
                      handleChange({
                        value,
                        index: rowIndex,
                        fieldName: item.colKey,
                        validate: item.validate,
                        itemChange: item.onChange,
                      });
                    }}
                    className={cx(
                      formatPayload?.className,
                      isError && 'sot-baseEditTable__selectError',
                    )}
                  />
                  {isError && <div className="sot-baseEditTable__errorTip">{item.errorTip}</div>}
                </>
              );
            case 'switch':
              return (
                <Switch
                  value={row[item.colKey as string]}
                  {...formatPayload}
                  disabled={disabled}
                  onChange={(value) => {
                    handleChange({
                      value,
                      index: rowIndex,
                      fieldName: item.colKey,
                      validate: item.validate,
                      itemChange: item.onChange,
                    });
                  }}
                />
              );
            default:
              return null;
          }
        },
        title: item.showRequire
          ? (props) => (
              <RenderRequire>
                {typeof item.title === 'function' ? item.title(props) : item.title}
              </RenderRequire>
            )
          : item.title,
      };
    });
    baseColumns.push({
      colKey: 'op',
      title: '操作',
      width: 80,
      cell: ({ rowIndex }) => {
        const isDisabled = rowIndex < minLength || disabled;
        return (
          <>
            <a
              onClick={() => {
                !isDisabled && handleDelete(rowIndex);
              }}
              className={cx(isDisabled && 'sot-baseEditTable__deleteDisabled')}
            >
              删除
            </a>
          </>
        );
      },
    });
    return baseColumns;
  };

  const handleAdd = () => {
    onChange?.([
      ...data,
      {
        ...defaultAddData,
      } as T,
    ]);
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    onChange?.(newData);
    const newErrorList = errorList
      .filter((error) => error.rowKey !== index)
      .map((error) => ({
        colKey: error.colKey,
        rowKey: error.rowKey > index ? error.rowKey - 1 : error.rowKey,
      }));

    setErrorList(newErrorList);
  };

  return (
    <div className={cx(className)}>
      <Table
        rowKey="editKey"
        columns={getColumns() as PrimaryTableCol<any>[]}
        data={data}
        className="sot-baseEditTable__table"
      />
      <Button
        theme="default"
        icon={<AddIcon color="#6245ef" />}
        className={cx('sot-baseEditTable__add', disabled && 'sot-baseEditTable__disabled')}
        onClick={() => {
          handleAdd();
        }}
        disabled={data.length >= maxLength || disabled}
      >
        {addButtonText || '添加'}
      </Button>
    </div>
  );
}

const RenderRequire = ({ children }: { children: ReactNode }) => (
  <div>
    <span className="sot-baseEditTable__require">*</span>
    {children}
  </div>
);

/**
 * @description 一个受控的简易的可编辑表格，暴露 validateAll 方法来校验，如果外部通过非 onChange 方法改变了 data，记得调用 clearErrorState 方法来清除错误状态
 */
export default forwardRef(BaseEditTable);

import React, { memo, useRef, useState } from 'react';
import { Button } from 'tdesign-react';

import BaseEditTable from '../BaseEditTable';
import type { BaseEditTableInstance, ColumnsType } from '../type';

const BaseSelectList = () => {
  const [value, setValue] = useState<any[]>([]);
  const tableRef = useRef<BaseEditTableInstance>(null);

  const columns: ColumnsType<any>[] = [
    {
      colKey: 'name',
      title: '提交项名称',
      renderType: 'input',
      errorTip: '请输入协议名称',
      validate: (value: string) => !!value,
      showRequire: true,
    },
    {
      colKey: 'type',
      title: '提交类型',
      renderType: 'select',
      errorTip: '请选择提交类型',
      validate: (value: string) => !!value,
      showRequire: true,
      payload: {
        options: [
          { label: '测试', value: 1 },
          { label: '测试2', value: 2 },
        ],
      },
    },
    {
      colKey: 'tip',
      title: '提交项提示文案',
      renderType: 'input',
    },
    {
      colKey: 'require',
      title: '是否必填',
      renderType: 'switch',
      showRequire: true,
    },
  ];

  return (
    <div>
      <BaseEditTable
        data={value}
        columns={columns}
        defaultAddData={{ name: '', value: '' }}
        minLength={1}
        onChange={(data) => {
          setValue(data);
        }}
        ref={tableRef}
      />
      <Button
        onClick={() => {
          tableRef.current?.validateAll();
        }}
      >
        校验表格
      </Button>
    </div>
  );
};

export default memo(BaseSelectList);

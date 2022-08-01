// import { SelectList } from '9A612-react';
import React, { memo, useState } from 'react';

import SelectList from '../SelectList';

const list = [
  {
    label: '倚天屠龙记1',
    value: 1,
    level: 222,
  },
  {
    label: '倚天屠龙记2',
    value: 2,
    level: 222,
  },
  {
    label: '倚天屠龙记3',
    value: 3,
    level: 222,
  },
  {
    label: '倚天屠龙记4',
    value: 4,
    level: 222,
  },
  {
    label: '倚天屠龙记6',
    value: 5,
    level: 222,
    zxc: 123,
  },
  {
    label: '倚天屠龙记7',
    value: 6,
  },
  {
    label: '倚天屠龙记8',
    value: 7,
  },
  {
    label: '倚天屠龙记9',
    value: 8,
  },
  {
    label: '倚天屠龙记10',
    value: 9,
  },
  {
    label: '倚天屠龙记11',
    value: 10,
  },
];

const BaseSelectList = () => {
  const [dataSource, setDataSource] = useState(list);
  const [value, setValue] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getList = async (keyword?: string) => {
    return new Promise<any>((res) => {
      setLoading(true);

      setTimeout(() => {
        if (keyword === '1')
          res([
            {
              label: '倚天屠龙记1',
              value: 1,
            },
            {
              label: '倚天屠龙记11',
              value: 11,
            },
          ]);
        if (keyword === '2')
          res([
            {
              label: '倚天屠龙记2',
              value: 2,
            },
            {
              label: '倚天屠龙记22',
              value: 22,
            },
          ]);
        if (keyword === '3')
          res([
            {
              label: '倚天屠龙记3',
              value: 3,
            },
            {
              label: '倚天屠龙记33',
              value: 33,
            },
          ]);
        if (keyword === '4')
          return [
            {
              label: '倚天屠龙记4',
              value: 4,
            },
            {
              label: '倚天屠龙记44',
              value: 44,
            },
          ];
        if (!keyword) res(list);
        res([]);
        setLoading(false);
      }, 500);
    });
  };

  const handleSearch = async (keyword: string) => {
    const data = await getList(keyword);
    setDataSource(data);
  };

  return (
    <div>
      <SelectList
        showSearch
        dataSource={dataSource}
        value={value}
        onChange={({ value }) => {
          setValue(value);
        }}
        onSearch={(keyword: string) => {
          handleSearch(keyword);
        }}
        loading={loading}
      />
    </div>
  );
};

export default memo(BaseSelectList);

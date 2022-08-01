import { mount } from 'enzyme';
import React from 'react';

import Transfer from '../index';

describe('Transfer test', () => {
  const list = [
    {
      name: '倚天屠龙记1',
      id: 1,
      level: 222,
    },
    {
      name: '倚天屠龙记2',
      id: 2,
      level: 222,
    },
    {
      name: '倚天屠龙记3',
      id: 3,
      level: 222,
    },
    {
      name: '倚天屠龙记4',
      id: 4,
      level: 222,
    },
    {
      name: '倚天屠龙记6',
      id: 5,
      level: 222,
      zxc: 123,
    },
    {
      name: '倚天屠龙记7',
      id: 6,
    },
  ];
  const textConfig = {
    leftTitle: 'IP库',
    rightTitle: '已选片单',
    searchPlaceholder: '请输入IP名称搜索',
  };

  const pro = async (keyword) =>
    new Promise((res) => {
      setTimeout(() => {
        if (keyword === '1')
          res([
            {
              name: '倚天屠龙记1',
              id: 1,
            },
            {
              name: '倚天屠龙记11',
              id: 11,
            },
          ]);
        if (keyword === '2')
          res([
            {
              name: '倚天屠龙记2',
              id: 2,
            },
            {
              name: '倚天屠龙记22',
              id: 22,
            },
          ]);
        if (keyword === '3')
          res([
            {
              name: '倚天屠龙记3',
              id: 3,
            },
            {
              name: '倚天屠龙记33',
              id: 33,
            },
          ]);
        if (keyword === '4')
          return [
            {
              name: '倚天屠龙记4',
              id: 4,
            },
            {
              name: '倚天屠龙记44',
              id: 44,
            },
          ];
        if (!keyword) res(list);
        res([]);
      }, 0);
    });

  const searchFn = async (keyword) => await pro(keyword);
  it('正确渲染组件', () => {
    const w = mount(
      <Transfer
        textConfig={textConfig}
        onSearch={searchFn}
        showSearch
        defaultSelectedList={[
          {
            name: '倚天屠龙记3',
            id: 3,
            level: 222,
          },
        ]}
        dataSource={[
          {
            name: '倚天屠龙记2',
            id: 2,
          },
          {
            name: '倚天屠龙记22',
            id: 22,
          },
        ]}
      />,
    );
    expect(w.find('.omui-transfer__item__checkbox')).toBeTruthy();
    const deleteBtn = w.find('.omui-transfer__item__delete').first();
    deleteBtn.simulate('click');

    const selectAll = w.find('.omui-transfer__item__handle-all').at(0);
    selectAll.simulate('click');
    const item = w.find('.omui-PopConfirm_trigger').at(0);
    item.simulate('click');

    const searchItem = w.find('.omui-transfer__item__header .omui-input__inner');
    searchItem.value = '2';
    const searchBtn = w.find('.omui-input__search-btn');
    searchBtn.simulate('click');

    const searchInput = w.find('.omui-transfer__item__input');
    searchInput.value = '2';
    searchBtn.simulate('click');
  });
});

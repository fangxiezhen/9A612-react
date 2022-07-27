---
title: Card 卡片
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

## Card

Demo:

```tsx
import React from 'react';
import { Card } from './index.tsx';
import UserCards from '../../docs/site/Common/UserCards';

export default () => {
  const renderFly = () => (
    <>
      <span style={{ color: 'pink' }}>徐</span>
      <span style={{ color: 'red' }}>腾</span>
      <span style={{ color: 'orange' }}>fly</span>
    </>
  );

  const userConfig = [
    {
      avatarUrl: 'https://i.postimg.cc/0jLQyWQQ/super.jpg',
      homePageUrl:
        'https://baike.baidu.com/item/%E6%96%AF%E8%92%82%E8%8A%AC%C2%B7%E5%BA%93%E9%87%8C/902812',
      name: '徐银超',
      title: '超super',
    },
    {
      avatarUrl: 'https://i.postimg.cc/Pq6q0rmT/fly.jpg',
      homePageUrl:
        'https://baike.baidu.com/item/%E6%96%AF%E8%92%82%E8%8A%AC%C2%B7%E5%BA%93%E9%87%8C/902812',
      name: '徐腾飞',
      title: renderFly(),
    },
    {
      avatarUrl: 'https://i.postimg.cc/FRCz2sX0/giao.jpg',
      homePageUrl:
        'https://baike.baidu.com/item/%E6%96%AF%E8%92%82%E8%8A%AC%C2%B7%E5%BA%93%E9%87%8C/902812',
      name: '喻劭炜',
      title: 'giao炜',
    },
    {
      avatarUrl: 'https://i.postimg.cc/cHL69t2s/banana.jpg',
      homePageUrl:
        'https://baike.baidu.com/item/%E6%96%AF%E8%92%82%E8%8A%AC%C2%B7%E5%BA%93%E9%87%8C/902812',
      name: '蛟',
      title: '蕉',
    },
    {
      avatarUrl: 'https://i.postimg.cc/Fzfzm5h8/dad.jpg',
      homePageUrl:
        'https://baike.baidu.com/item/%E6%96%AF%E8%92%82%E8%8A%AC%C2%B7%E5%BA%93%E9%87%8C/902812',
      name: '鑫',
      title: '爸爸',
    },
    {
      avatarUrl: 'https://i.postimg.cc/KcV4fzN2/ikun.jpg',
      homePageUrl:
        'https://baike.baidu.com/item/%E6%96%AF%E8%92%82%E8%8A%AC%C2%B7%E5%BA%93%E9%87%8C/902812',
      name: '昆',
      title: 'ikun',
    },
  ];
  return <UserCards userConfig={userConfig} />;
};
```

<API src='./index.tsx'></API>

---
hero:
  title: 9A612-react
  desc: 9A612组件库- react 版
  actions:
    - text: 快速开始
      link: /components
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 指你安装后就能立即使用 <br />（this is a useless word）
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 流畅好用
    desc: 芜湖起飞
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 为组件开发而生
    desc: 会为你省下一些摸鱼时间,斯巴拉西
footer: 9A612之父为儿子们亲情打造<br />Powered by [fangxiezhen](https://github.com/fangxiezhen/9A612-react)
---

## 谁在使用

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Card } from '../src';
import UserCards from './site/Common/UserCards';

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

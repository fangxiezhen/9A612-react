import { Empty } from '9A612-react';
import React, { memo } from 'react';

const Base = () => {
  return (
    <div>
      <Empty title="侵权赔偿" type="money"></Empty>
      <Empty title="暂无消息" type="message"></Empty>
      <Empty title="暂无图片" type="image"></Empty>
      <Empty title="暂无email" type="email"></Empty>
      <Empty title="暂无视频" type="video"></Empty>
      <Empty title="哭脸" type="cry"></Empty>
      <Empty title="暂无文章" type="article"></Empty>
      <Empty title="暂无违规" type="smile"></Empty>
      <Empty title="暂无数据" type="data"></Empty>
      <Empty title="投票" type="vote"></Empty>
      <Empty title="账号被封" type="warning"></Empty>
    </div>
  );
};

export default memo(Base);

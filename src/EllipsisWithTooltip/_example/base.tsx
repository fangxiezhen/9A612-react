import React, { memo } from 'react';

import EllipsisWithTooltip from '../EllipsisWithTooltip';
import styles from './base.less';

const BaseEllipsisWithTooltip = () => {
  const text1 = '我是被缩略的啦啦啦德玛西亚，啦啦啦啦撸啊撸啊';
  const text3 = '我没有缩略';
  const text2 = '我还是锁了我还是锁了我还是锁了我还是锁了我还是锁了';
  return (
    <div>
      <div className={styles.base}>
        <EllipsisWithTooltip content={text1}>{text1}</EllipsisWithTooltip>
      </div>
      <div className={styles.base}>
        <EllipsisWithTooltip content={text2}>{text2}</EllipsisWithTooltip>
      </div>
      <div className={styles.base}>
        <EllipsisWithTooltip content={text3}>{text3}</EllipsisWithTooltip>
      </div>
    </div>
  );
};

export default memo(BaseEllipsisWithTooltip);

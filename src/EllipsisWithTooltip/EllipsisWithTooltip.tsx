import cx from 'classnames';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Tooltip } from 'tdesign-react';

import './style/index.less';
import type { EllipsisWithTooltipProps } from './type';

const EllipsisWithTooltip: React.FC<EllipsisWithTooltipProps> = (props) => {
  const { className, children } = props;
  const [hasBeyond, setHasBeyond] = useState(true);

  const childrenRef = useRef<HTMLDivElement>(null);
  const tooltipContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 判断需要缩略的内容是否正在缩略，如果不是，则不展示悬浮提示
    if (
      Number(childrenRef.current?.clientWidth || 0) <=
      Number(tooltipContentRef.current?.clientWidth || 0)
    ) {
      setHasBeyond(false);
    }
  }, []);

  return (
    <>
      <div
        ref={childrenRef}
        className={cx(
          'sot-ellipsisWithTooltip-hideChild',
          'sot-ellipsisWithTooltip-none',
          className,
        )}
      >
        {children}
      </div>
      {hasBeyond ? (
        <Tooltip {...props}>
          <div
            ref={tooltipContentRef}
            className={cx(
              'sot-ellipsisWithTooltip__content',
              hasBeyond && 'sot-ellipsisWithTooltip__pointer',
              className,
            )}
          >
            {children}
          </div>
        </Tooltip>
      ) : (
        children
      )}
    </>
  );
};

export default React.memo(EllipsisWithTooltip);

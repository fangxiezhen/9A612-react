import cx from 'classnames';
import React, { memo } from 'react';
import { Loading as TLoading } from 'tdesign-react';

import './style/index.less';
import type { LoadingProps } from './type';

const DefaultIndicator = () => (
  <div className={cx('sot-loading')}>
    <div className="sot-loading-loader">
      <span className="sot-loading-line" />
      <span className="sot-loading-line" />
      <span className="sot-loading-line" />
    </div>
  </div>
);

const Loading = (props: LoadingProps) => {
  const indicatorMap = {
    default: true,
    soundEffect: <DefaultIndicator />,
  };

  return (
    <TLoading {...props} indicator={props.indicator || indicatorMap[props?.type || 'default']}>
      {props.children}
    </TLoading>
  );
};

export default memo(Loading);

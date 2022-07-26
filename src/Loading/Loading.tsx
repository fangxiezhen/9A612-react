import React, { memo } from 'react';
import './style/index.less';
import cx from 'classnames';
import type { LoadingProps } from './type';
import { Loading as TLoading } from 'tdesign-react';

const DefaultIndicator = () => (
  <div className={cx('loading')}>
    <div className="loadingLoader">
      <span className="loadingLine" />
      <span className="loadingLine" />
      <span className="loadingLine" />
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

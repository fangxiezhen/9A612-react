import type { LoadingProps as TLoadingProps } from 'tdesign-react';

interface LoadingProps extends TLoadingProps {
  /**
   * @description loading 加载指示符，目前仅有'default'和'soundEffect'模式
   * @default 'default'
   */
  type?: 'default' | 'soundEffect';
}

export type { LoadingProps };

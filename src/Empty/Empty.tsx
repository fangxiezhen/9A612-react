/**
 * @todo 期望将 svg 改为动态加载
 */
import cx from 'classnames';
import React, { memo } from 'react';

import './style/index.less';
import { ReactComponent as ArticleSvg } from './svg/empty-article-min.svg';
import { ReactComponent as CrySvg } from './svg/empty-cry-min.svg';
import { ReactComponent as DataSvg } from './svg/empty-data-min.svg';
import { ReactComponent as EmailSvg } from './svg/empty-email-min.svg';
import { ReactComponent as ImageSvg } from './svg/empty-image-min.svg';
import { ReactComponent as MessageSvg } from './svg/empty-message-min.svg';
import { ReactComponent as MoneySvg } from './svg/empty-money-min.svg';
import { ReactComponent as SmileSvg } from './svg/empty-smile-min.svg';
import { ReactComponent as VideoSvg } from './svg/empty-video-min.svg';
import { ReactComponent as VoteSvg } from './svg/empty-vote-min.svg';
import { ReactComponent as WarningSvg } from './svg/empty-warning-min.svg';
import type { EmptyProps } from './type';
import { IconType } from './type';

const iconsMap = {
  [IconType.Article]: <ArticleSvg viewBox="0 0 512 512" />,
  [IconType.Cry]: <CrySvg viewBox="0 0 512 512" />,
  [IconType.Data]: <DataSvg viewBox="0 0 512 512" />,
  [IconType.Email]: <EmailSvg viewBox="0 0 512 512" />,
  [IconType.Image]: <ImageSvg viewBox="0 0 512 512" />,
  [IconType.Message]: <MessageSvg viewBox="0 0 512 512" />,
  [IconType.Money]: <MoneySvg viewBox="0 0 512 512" />,
  [IconType.Smile]: <SmileSvg viewBox="0 0 512 512" />,
  [IconType.Video]: <VideoSvg viewBox="0 0 512 512" />,
  [IconType.Vote]: <VoteSvg viewBox="0 0 512 512" />,
  [IconType.Warning]: <WarningSvg viewBox="0 0 512 512" />,
};

const Empty = ({ title, onClick, className, style, type }: EmptyProps) => {
  return (
    <div
      className={cx('sot-empty', className)}
      onClick={() => {
        onClick?.();
      }}
      style={style}
    >
      {iconsMap[type || IconType.Data]}
      <div className="sot-empty-title">{title}</div>
    </div>
  );
};

export default memo(Empty);

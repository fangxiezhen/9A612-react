import React, { memo } from 'react';
import styles from './index.less';
import type { IUserCard, UserCardsProps } from './type';

const UserCard = ({ avatarUrl, name, title, homePageUrl }: IUserCard) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.avatar}>
        <a href={homePageUrl} target="_blank">
          <img src={avatarUrl} alt={name} />
        </a>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

const UserCards = ({ userConfig }: UserCardsProps) => {
  return (
    <div className={styles.userCards}>
      {userConfig.map((item,index) => (
        <UserCard {...item} key={index} />
      ))}
    </div>
  );
};

export default memo(UserCards);

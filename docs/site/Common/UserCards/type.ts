import type { ReactNode } from 'react';

export interface IUserCard {
  avatarUrl?: string;
  homePageUrl?: string;
  name?: string;
  title?: ReactNode;
}

export interface UserCardsProps {
  userConfig: IUserCard[];
}

import { ReactElement } from 'react';

export interface IInvitation {
  title1: string;
  text1: ReactElement;
  title2: string;
  text2: ReactElement;
}

export interface IButton {
  title: string;
  linkUrl?: string;
  imageUrl: string;
  maxHeight?: number;
  text?: ReactElement;
  disabled?: boolean;
}

export interface IDonate {
  title: string;
  subtitle: string;
  patreon: IButton;
  buttons: IButton[];
}

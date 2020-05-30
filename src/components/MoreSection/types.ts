import { ReactElement } from 'react';

export interface ITabs {
  key: string;
  title: string;
  text: ReactElement;
  mapUrl?: string;
  addressTitle?: string;
  imageUrl?: string;
}

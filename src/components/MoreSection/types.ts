import { ReactElement } from 'react';

export interface ITabs {
  key: string;
  title: string;
  subtitle?: string;
  text: ReactElement;
  mapUrl?: string;
  addressTitle?: string;
  imageUrl?: string;
  calendarUrl?: {
    url: string;
    params: { [key: string]: string | number };
  };
}

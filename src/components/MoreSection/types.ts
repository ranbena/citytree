import { ReactElement } from 'react';

export interface ITabs {
  key: string;
  title: string;
  subtitle?: string;
  text: ReactElement;
  mapUrl?: string;
  addressTitle?: string;
  imageUrl?: string;
  events?: {
    title: string;
    facebookEventUrl: string;
  }[];
  calendarUrl?: {
    url: string;
    params: Record<string, string | number>;
  };
}

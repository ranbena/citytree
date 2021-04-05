type Event = {
  id: string;
  url: string;
  image: string;
  date: string;
  type: 'online' | 'tour' | 'house' | 'retreat';
  locale?: 'he' | 'en';
};

export const events: Event[] = [];

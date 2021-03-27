import { TabKey } from './index';

export type Events = Record<
  TabKey,
  {
    start: string;
    end: string;
    eventDates: { [key: number]: string };
  }
>;

const events: Events = {
  usefulness: {
    start: 'May 4 2021 19:00:00 GMT+0200',
    end: 'Jun 13 2021 19:00:00 GMT+0200',
    eventDates: {
      1: 'May 4 2021 19:00:00 GMT+0200',
      2: 'May 11 2021 19:00:00 GMT+0200',
      3: 'May 18 2021 19:00:00 GMT+0200',
      4: 'May 25 2021 19:00:00 GMT+0200',
      5: 'Jun 1 2021 19:00:00 GMT+0200',
      6: 'Jun 8 2021 19:00:00 GMT+0200',
    },
  },
  movement: {
    start: 'Jun 14 2021 19:00:00 GMT+0200',
    end: 'Jul 26 2021 19:00:00 GMT+0200',
    eventDates: {
      7: 'Jun 14 2021 19:00:00 GMT+0200',
      8: 'Jun 22 2021 19:00:00 GMT+0200',
      9: 'Jun 29 2021 19:00:00 GMT+0200',
      10: 'Jul 6 2021 19:00:00 GMT+0200',
      11: 'Jul 13 2021 19:00:00 GMT+0200',
      12: 'Jul 20 2021 19:00:00 GMT+0200',
    },
  },
  satisfaction: {
    start: 'Jul 27 2021 19:00:00 GMT+0200',
    end: 'Aug 31 2021 19:00:00 GMT+0200',
    eventDates: {
      13: 'Jul 27 2021 19:00:00 GMT+0200',
      14: 'Aug 3 2021 19:00:00 GMT+0200',
      15: 'Aug 10 2021 19:00:00 GMT+0200',
      16: 'Aug 17 2021 19:00:00 GMT+0200',
      17: 'Aug 24 2021 19:00:00 GMT+0200',
      18: 'Aug 31 2021 19:00:00 GMT+0200',
    },
  },
};

export default events;

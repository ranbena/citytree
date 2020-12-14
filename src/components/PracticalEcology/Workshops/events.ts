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
  prosperity: {
    start: 'Nov 6 2020 19:00:00 GMT+0200',
    end: 'Dec 20 2020 19:00:00 GMT+0200',
    eventDates: {
      // Compost and the Big City - Introduction
      1: 'Nov 10 2020 19:00:00 GMT+0200',

      // How to Be Sick: A Medicinal Potion and More
      2: 'Nov 17 2020 19:00:00 GMT+0200',

      // Winter Lunch: The Basics of a Simple Diet
      3: 'Nov 24 2020 19:00:00 GMT+0200',

      // Vinegar and Life in the Fall: How to Make Vinegar
      4: 'Dec 1 2020 19:00:00 GMT+0200',

      // Fire of Rebellion: Ecological Candles | Hanukkah Class
      5: 'Dec 8 2020 19:00:00 GMT+0200',

      // Kombucha and Bacteria: Probiotics & Fun
      6: 'Dec 15 2020 19:00:00 GMT+0200',
    },
  },
  agriculture: {
    start: 'Dec 21 2020 19:00:00 GMT+0200',
    end: 'Feb 5 2021 19:00:00 GMT+0200',
    eventDates: {
      7: 'Dec 22 2020 19:00:00 GMT+0200',

      8: 'Dec 29 2020 19:00:00 GMT+0200',

      9: 'Jan 12 2021 19:00:00 GMT+0200',

      10: 'Jan 19 2021 19:00:00 GMT+0200',

      11: 'Jan 26 2021 19:00:00 GMT+0200',

      12: 'Feb 2 2021 19:00:00 GMT+0200',
    },
  },
  nutrition: {
    start: 'Feb 6 2021 19:00:00 GMT+0200',
    end: 'Mar 20 2021 19:00:00 GMT+0200',
    eventDates: {
      13: 'Feb 9 2021 19:00:00 GMT+0200',

      14: 'Feb 16 2021 19:00:00 GMT+0200',

      15: 'Feb 23 2021 19:00:00 GMT+0200',

      16: 'Mar 2 2021 19:00:00 GMT+0200',

      17: 'Mar 9 2021 19:00:00 GMT+0200',

      18: 'Mar 16 2021 19:00:00 GMT+0200',
    },
  },
};

export default events;

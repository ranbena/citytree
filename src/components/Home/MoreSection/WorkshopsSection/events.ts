import compost1 from 'src/assets/images/workshops/compost1.jpg';
import illness from 'src/assets/images/workshops/illness.jpg';
import meal from 'src/assets/images/workshops/meal.jpg';
import tour from 'src/assets/images/workshops/kikar-bialik-tour.jpg';
import retreat from 'src/assets/images/workshops/7-day-retreat.jpg';
import abracadabra from 'src/assets/images/workshops/abracadabra.jpg';
import book from 'src/assets/images/workshops/book.jpg';
import candles from 'src/assets/images/workshops/candles.jpg';
import compost2 from 'src/assets/images/workshops/compost2.jpg';
import disposable from 'src/assets/images/workshops/disposable-products.jpg';
import hairwash from 'src/assets/images/workshops/hairwash.jpg';
import kombucha from 'src/assets/images/workshops/kombucha.jpg';
import mornings from 'src/assets/images/workshops/mornings.jpg';
import plants from 'src/assets/images/workshops/plants.jpg';
import spray from 'src/assets/images/workshops/spray.jpg';
import sunscreen from 'src/assets/images/workshops/sunscreen.jpg';
import sweets from 'src/assets/images/workshops/sweets.jpg';
import tea from 'src/assets/images/workshops/tea.jpg';
import trees from 'src/assets/images/workshops/trees.jpg';
import vinegar from 'src/assets/images/workshops/vinegar.jpg';
import weeds from 'src/assets/images/workshops/weeds.jpg';
import peels from 'src/assets/images/workshops/peels.jpg';

type Event = {
  id: string;
  url: string;
  image: string;
  date: string;
  type: 'online' | 'tour' | 'house' | 'retreat';
  locale?: 'he' | 'en';
};

export const events: Event[] = [
  {
    id: '376031080223235',
    url: 'https://www.facebook.com/events/376031080223235/',
    image: compost1,
    date: 'Nov 10 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '346135006581979',
    url: 'https://www.facebook.com/events/346135006581979/',
    image: illness,
    date: 'Nov 17 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '383640592802406',
    url: 'https://www.facebook.com/events/383640592802406/',
    image: meal,
    date: 'Nov 24 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '761561041330970',
    url: 'https://www.facebook.com/events/761561041330970/',
    image: tour,
    date: 'Nov 27 2020 11:00:00 GMT+0200',
    type: 'tour',
  },
  {
    id: '2799376593676978',
    url: 'https://www.facebook.com/events/2799376593676978/',
    image: vinegar,
    date: 'Dec 01 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '3314838828600942',
    url: 'https://www.facebook.com/events/3314838828600942/',
    image: kombucha,
    date: 'Dec 08 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '1013474255838254',
    url: 'https://www.facebook.com/events/1013474255838254/',
    image: book,
    date: 'Dec 11 2020 12:00:00 GMT+0200',
    type: 'house',
  },
  {
    id: '624089721619740',
    url: 'https://www.facebook.com/events/624089721619740/',
    image: candles,
    date: 'Dec 15 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '624365908469804',
    url: 'https://www.facebook.com/events/624365908469804/',
    image: plants,
    date: 'Dec 22 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '335776294432008',
    url: 'https://www.facebook.com/events/335776294432008/',
    image: compost2,
    date: 'Dec 29 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '995435214299746',
    url: 'https://www.facebook.com/events/995435214299746',
    image: retreat,
    date: 'Jan 1, 2021 10:00:00 GMT+0200',
    type: 'retreat',
  },
  {
    id: '1409480316049596',
    url: 'https://www.facebook.com/events/1409480316049596',
    image: tour,
    date: 'Jan 8, 2021 11:00:00 GMT+0200',
    type: 'tour',
  },
  {
    id: '3294869070634304',
    url: 'https://www.facebook.com/events/3294869070634304/',
    image: tea,
    date: 'Jan 12 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '945134666017445',
    url: 'https://www.facebook.com/events/945134666017445',
    image: weeds,
    date: 'Jan 19 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '331939588081680',
    url: 'https://www.facebook.com/events/331939588081680/',
    image: trees,
    date: 'Jan 26 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '966818803823564',
    url: 'https://www.facebook.com/events/966818803823564/',
    image: disposable,
    date: 'Feb 2 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '359931955368230',
    url: '/en/abracadabra',
    image: abracadabra,
    date: 'Feb 3 2021 19:00:00 GMT+0200',
    type: 'online',
    locale: 'en',
  },
  {
    id: '974527733059741',
    url: 'https://www.facebook.com/events/974527733059741/',
    image: spray,
    date: 'Feb 9 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '3553265128051458',
    url: 'https://www.facebook.com/events/3553265128051458/',
    image: mornings,
    date: 'Feb 16 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '243636040457586',
    url: 'https://www.facebook.com/events/243636040457586/',
    image: sweets,
    date: 'Feb 23 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '821237308644317',
    url: 'https://www.facebook.com/events/821237308644317/',
    image: hairwash,
    date: 'Mar 2 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '451485792523691',
    url: 'https://www.facebook.com/events/451485792523691/',
    image: peels,
    date: 'Mar 9 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '612468359441909',
    url: 'https://www.facebook.com/events/612468359441909/',
    image: sunscreen,
    date: 'Mar 16 2021 19:00:00 GMT+0200',
    type: 'online',
  },
];

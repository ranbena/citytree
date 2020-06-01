import React from 'react';

import ogImage from './images/og.png';
import favicon from './images/favicon.ico';

export const phone = '03-5254196';
export const bitPhone = '058-4227531';
export const email = 'tree@citytree.net';
export const address = 'ביאליק 25 דירה 7';

export const phoneLink = <a href={`tel:${phone}`}>{phone}</a>;
export const emailLink = <a href={`mail:${email}`}>{email}</a>;
export const patreonUrl = 'https://www.patreon.com/CityTree';

export const meta = {
  title: 'אקולוגיה עירונית: עץבעיר',
  siteUrl: process.env.GATSBY_SITE_URL,
  siteName: 'עץבעיר',
  description: 'עץבעיר: עסק חברתי לאקולוגיה עירונית',
  keywords:
    "אקולוגיה, אקולוגיה עירונית, ירוק, טבע בעיר, דירה אקולוגית, גינה קהילתית, סביבה ירוקה, קומפוסט, גינון גרילה, סדנת גלידה, שוקולד בריא, גלידה טבעית, מיטפח, קיימות, טיפים אקולוגיים, קהילה אורגנית, חשיבה סביבתית, תזונה מתחשבת, צרכנות אחראית, הפחתה, שימוש מחדש, מיחזור, חקלאות ביתית, גינת מרפסת, טבע בעיר, חיים בני-קיימא, פרמהקלצ'ר, פרמקלצ'ר, אקולוגיה מעשית, מיחזור מים, גידול ירקות, איכות סביבה, בריאות הגוף והסביבה",
  image: {
    path: ogImage,
    width: '764',
    height: '764',
  },
  favicon,
  author: 'תמי צרי וצוות עץבעיר',
};

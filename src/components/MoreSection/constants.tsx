import React from 'react';
import { ITabs } from './types';
import { phoneLink, emailLink } from '../../constants';

const color1 = '#000000';
const color2 = '#ffffff';

export const Tabs: ITabs[] = [
  {
    key: 'schedule',
    title: 'לוח זמנים',
    subtitle: 'לוח הזמנים הקבוע שלנו',
    text: (
      <>
        בימי שלישי ב-11:00 בבוקר – שיעור "השיבה הביתה" עם תמי, בזום
        <br />
        בימי שלישי ב-15:00 – עבודה בגינות עם אלון
        <br />
        בימי שישי ב-11:00 בבוקר – "עושות חיים בבית" עם תמי
        <br />
        בימי שישי ב-15:00 – עבודה בגינות עם אלון
        <br />
        <br />
        בנוסף מתקיימות סדנאות ואירועים חד-פעמיים.
        <br />
        אנו מעדכנים על כל ההתרחשות בעלון שבועי, ופעם בשישה שבועות יוצא עלון "עונתי" – טופס הצטרפות
        לרשימת התפוצה
        <br />
        אפשר לתאם איתנו סדנאות וסיורים, בטלפון: {phoneLink} או בדוא"ל: {emailLink} .
      </>
    ),
    calendarUrl: {
      url: 'https://calendar.google.com/calendar/b/1/embed',
      params: {
        wkst: 1,
        color: color1,
        bgcolor: color2,
        ctz: 'Asia-Jerusalem',
        src: 'Zm1oajBuMmFudjlwcnNvcXVob2MyMmc4bTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
        mode: 'WEEK',
        showTabs: 0,
        showCalendars: 0,
        showTz: 0,
        showPrint: 0,
        showTitle: 0,
        showNav: 1,
      },
    },
  },
];

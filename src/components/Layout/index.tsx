import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { getAbsolutePath } from 'src/utils';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ogImage from 'src/assets/images/og.jpg';
import favicon from 'src/assets/images/favicon.ico';
import './styles.scss';

const image = {
  path: ogImage,
  width: '1830',
  height: '1091',
};

const strings = {
  he: {
    dir: 'rtl',
    locale: 'he_IL',
    title: 'עץבעיר - מרכז ידע חי לאקולוגיה עירונית ולחוסן אקלימי',
    description: 'עולם אחר הוא אפשרי',
    keywords:
      "אקולוגיה, אקולוגיה עירונית, ירוק, טבע בעיר, דירה אקולוגית, גינה קהילתית, סביבה ירוקה, קומפוסט, גינון גרילה, סדנת גלידה, שוקולד בריא, גלידה טבעית, מיטפח, קיימות, טיפים אקולוגיים, קהילה אורגנית, חשיבה סביבתית, תזונה מתחשבת, צרכנות אחראית, הפחתה, שימוש מחדש, מיחזור, חקלאות ביתית, גינת מרפסת, טבע בעיר, חיים בני-קיימא, פרמהקלצ'ר, פרמקלצ'ר, אקולוגיה מעשית, מיחזור מים, גידול ירקות, איכות סביבה, בריאות הגוף והסביבה",
    author: 'תמי צרי וצוות עץבעיר',
    siteName: 'עץבעיר',
  },
  en: {
    dir: 'ltr',
    locale: 'en_US',
    title: 'CityTree - A Living Knowledge Center for Deep Ecology and Climate Resilience.',
    description: 'Another world is possible',
    keywords:
      'Ecology, Urban Ecology, Green, Nature in the city, Ecological living, Ecological home, Community garden, Green environment, Compost, Guerilla gardening, Ice cream workshop, Healty chocolate, Natural ice cream, sustainability, Ecological tips, Organic community, Environmental thinking, Consideration nutrition, Responsible consumption, Minimalism, Reuse, Recycling, Home agriculture, Patio garden, Sustainable living, Permaculture, Practical ecology, Water recycling, vegetable growing, Health and Environment',
    author: 'Tami Zori and the CityTree team',
    siteName: 'CityTree',
  },
};

const Layout: FC<{ locale?: 'en' | 'he'; children: React.ReactNode }> = ({
  locale = 'he',
  children,
}) => {
  const { dir, title, keywords, description, author, siteName } = strings[locale];

  return (
    <>
      <Helmet bodyAttributes={{ dir }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <link rel="shortcut icon" href={favicon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={getAbsolutePath(image.path)} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <div className="layout" id="top">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

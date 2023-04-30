import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import { BoxInner, ButtonWrapper, Title } from './styles';
import Tour from './Tour';

const images = [
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_ForageTour_02_Einat.jpg"
        alt=""
        placeholder="none"
        width={720}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_ForageTour_02_Einat.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Hibiscus_01_tami.jpg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Hibiscus_01_tami.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Forage_01_tami.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Forage_01_tami.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Alon_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Alon_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#d0dfcc">
    <Title>הרצאה של עינת לסט</Title>
    <Paragraph>
      במשך שנתיים וחצי עינת גרה ועבדה בעץבעיר, ובמהלכן התחילה לפתח את משנתה וחזונה לעולם יפה יותר,
      מהפרספקטיבה של אישה צעירה.
    </Paragraph>
    <Paragraph>
      איך זה שצעירה שיש לה כל הנתונים, בכל-זאת לא מצליחה ״להסתדר״ במסלול? איך זה קשור למשבר האקלים
      הדוהר? האם קיימת אפשרות מלבד מלצרות או עבודה בשירות לקוחות, תשלום שכר דירה ותכנון הטיול הבא
      לחו״ל?
    </Paragraph>
    <Paragraph grow>
      עינת הייתה על המסלול ואז ירדה ממנו לתקופה בלתי מוגדרת מראש, כדי לבדוק מה אפשרי מחוץ לכל מה
      שידעה על מה שהחיים מזמנים לה... בהרצאתה תוכלו לשמוע מה גילתה, ואם תהיו נחמדים במיוחד, היא גם
      תקרא לכן משיריה המהפכניים.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#3d5937">
        להזמנת הרצאה של עינת
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const ForageTour: React.FC = () => (
  <Tour bgcolor="#3d5937" anchor="forage" box={<Box />} images={images} />
);

export default ForageTour;

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
    <Title>סיור ליקוט עם ד"ר אלון אלירן</Title>
    <Paragraph>
      בילוי בין הבניינים, בגינות הקהילתיות ובחצרות האחוריות, עם החבר, עם המשפחה או עם החבר'ה
      מהעבודה, הוא הזדמנות מצוינת להעלות שאלות, להציף פחדים, לצחוק יחד על החיים, לטעום טעמים חדשים,
      להכיר צמחים ופרחים שלא ידעתם שאפשר לאכול ולגעת בפשטות.
    </Paragraph>
    <Paragraph>
      ד"ר אלון אלירן חוקר את הנסתר מן העין בעיר הגדולה כבר עשרים שנה לפחות. הידע שלו משתרע במחוזות
      הבוטניקה , הפואטיקה, הפיזיקה והמוזיקה. במפגש עם אלון אפשר לקבל תשובות על שאלות בענייני תזונה
      או גינון, אקלים או קונספירציה. בנוסף לליקוט, אלון משלב בסיור גם משיריו.
    </Paragraph>
    <Paragraph grow>אורך הסיור והמחיר מותאמים לגודל הקבוצה ולצרכיה.</Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#3d5937">
        להזמנת סיור ליקוט
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const ForageTour: React.FC = () => (
  <Tour bgcolor="#3d5937" anchor="forage" box={<Box />} images={images} />
);

export default ForageTour;

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
        src="../../assets/images/tours/CityTre_VisitTheTree_01_tami.jpg"
        alt=""
        placeholder="none"
        width={720}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTre_VisitTheTree_01_tami.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_BialikCircle_Liana.jpg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_BialikCircle_Liana.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Batata_01_tami.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Batata_01_tami.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_AlonAviKabucha_01_Tami.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_AlonAviKabucha_01_Tami.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#fff5f1">
    <Title>עץבעיר - ההרצאה</Title>
    <Paragraph>
      איך נראו החיים בעץבעיר במשך 16 שנים - חיי האקולוגיה העמוקה בעיר, משק הבית והגינות האקולוגיות
      והקשר ביניהם, חדרי הדירה האקולוגית ואופן החיים השיתופיים שקיימנו בהם, שיטות הקומפוסטציה
      המהפכניות שלנו, כולל שירותי קומפוסט בקומה השנייה בלב העיר.
    </Paragraph>
    <Paragraph>
      וגם, איך מתקיים הקשר בינינו כיום, כשאנחנו גרים בבתים שונים (עם ההורים שלנו!), וכמובן מבט אל
      החזון העתידי האפשרי לעץבעיר ובכלל.
    </Paragraph>
    <Paragraph grow>
      הרצאה מתובלת בהדגמות מעשיות קטנות והמון טיפים. ניתן לקבל את ההרצאה בזום או במפגש פנים אל פנים.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#4a3b35">
        להזמנת הרצאה
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const AbraKadabra: React.FC = () => (
  <Tour bgcolor="#4a3b35" anchor="abrakadabra" box={<Box />} images={images} reverseLayout />
);

export default AbraKadabra;

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
        src="../../assets/images/tours/tami_soil_series.jpg"
        alt=""
        placeholder="none"
        width={720}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/tami_soil_series.jpg"
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
    <Title>עושות חיים בבית: סדרת אדמה</Title>
    <Paragraph>משיבות חיים לאדמה - מתחילות ב-8/1 ב-19:00 בתל חובז׳</Paragraph>
    <Paragraph>
      אם גם את כְּמֵהָה, אם גם אתה כָּמֵהַּ לצאת מהמסך אל המטבח, לרדת מהאוויר אל האדמה ולהתחיל להשיב
      לה חיים, אם יש לכן הרגשה שיותר מדי אוכל נזרק לפח, ושיש משהו אחר שקליפת הבננה רוצה לעשות, בוא,
      בואי למפגשי סדרת האדמה (בזום), שבהם תגלו מהי אקולוגיה עמוקה ומהי אדמה, בחיי היום-יום.
      <br />
    </Paragraph>
    <Paragraph grow>
      כאן תמצאו את כל הפרטים וגם את טופס ההרשמה לסדרת האדמה שלא תוכלו לעבור אותה בלי להתחיל לעשות
      קומפוסט. ברוכות השבות.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.soilSeriesForm} target="_blank" bgcolor="#385958">
        לפרטים והרשמה
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const VirtualTour: React.FC = () => (
  <Tour bgcolor="#4a3b35" anchor="virtual" box={<Box />} images={images} reverseLayout />
);

export default VirtualTour;

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import Tour from './Tour';
import { BoxInner, ButtonWrapper, Title } from './styles';

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
        src="../../assets/images/tours/Z06_0976.jpg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_07_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_07_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_03_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_03_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
  {
    thumb: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_01_Sq_.jpeg"
        alt=""
        placeholder="none"
        width={175}
        height={175}
      />
    ),
    full: (
      <StaticImage
        src="../../assets/images/tours/CityTree_Tami_Workshop_01_Sq_.jpeg"
        alt=""
        placeholder="none"
        layout="fixed"
      />
    ),
  },
];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#cfe5e3">
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

const Sessions: React.FC = () => (
  <Tour bgcolor="#385958" anchor="sessions" box={<Box />} images={images} />
);

export default Sessions;

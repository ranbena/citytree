import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import { BoxInner, ButtonWrapper, Title } from './styles';
import Tour from './Tour';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#cfe5e3">
    <Title>הרצאה של תמי צרי</Title>
    <Paragraph>
      תמי צרי חיה בכיכר ביאליק במשך 16 שנים ורקמה שם את החזון שלה לעיר־יער שבה אנחנו מקיימים את
      החיים היפים יותר שלבבותנו יודעים שאפשריים לנו. היא הביאה את משק הבית של עץבעיר לדרגה גבוהה של
      יצרנות ויצירתיות בלב העיר הגדולה, בשילוב עם הגינות האקולוגיות שטיפח ד״ר אלון אלירן, ולמדה
      לחיות עם א׳נשים אחרים; מלבד אלון, מלווים אותה במסעה המתמשך גם אבי ועינת וכל קהילת העץ.
    </Paragraph>
    <Paragraph grow>
      עכשיו היא תשמח לפגוש כל מעגל ולשתף בסיפור שלה, בליווי הדגמות מעשיות של כמה מהטריקים הטובים
      שהיא פיתחה לחיי קסם מתחת לרדאר הקפיטליסטי.
    </Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#385958">
        להזמנת הרצאה של תמי צרי
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_01_B_.jpeg"
      alt=""
      width={720}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_06_Sq_.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_05_Sq_.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_01_Sq_.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
  </ImageContainer>
);

const TamiLecture: React.FC = () => (
  <Tour bgcolor="#385958" anchor="tami" box={<Box />} images={<Images />} reverseLayout />
);

export default TamiLecture;

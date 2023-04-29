import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import Tour from './Tour';
import { BoxInner, ButtonWrapper, Title } from './styles';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#cfe5e3">
    <Title>מיני-סדנאות והרצאות</Title>
    <Paragraph>הזמינו אותנו להשתלב באירוע שלכן עם הרצאה קצרה או סדנה מעשית.</Paragraph>
    <Paragraph>
      תמי מוכנה לעלות על כל במה עם קלשון ולדבר ישירות בענייני כסף, קקי ואוכל או לעמוד מאחורי שולחן
      הדגמות ולדבר על אותם עניינים עם קהל מזדמן. על השולחן אנחנו מציגות הדגמות של קומפוסטציה, ניקיון
      נקי, או תזונה מיטיבה ותמיד שמחות לדבר עם א'נשים על כל מה שחשוב באמת בחיים, תוך-כדי שהם ממששים
      קומפוסט, מריחים חומץ ביתי או טועמים לדר תמרים מיטיב.
    </Paragraph>
    <Paragraph grow>מוזמנות לעיין בקטלוג הסדנאות שלנו כדי להתרשם מהתכנים האפשריים.</Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#385958">
        להזמנת מיני-סדנה/הרצאה
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/Z06_0976.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={720}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Workshop_07_Sq_.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Workshop_03_Sq_.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Workshop_01_Sq_.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
  </ImageContainer>
);

const Sessions: React.FC = () => (
  <Tour bgcolor="#385958" anchor="sessions" box={<Box />} images={<Images />} />
);

export default Sessions;

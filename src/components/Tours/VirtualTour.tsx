import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import { BoxInner, ButtonWrapper, Title } from './styles';
import Tour from './Tour';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#fff5f1">
    <Title>עץבעיר – סיור וירטואלי</Title>
    <Paragraph>
      סיור אל תוך החיים של עץבעיר, ובו אנו מתארים את חיי האקולוגיה העמוקה בעיר, משק הבית והגינות
      האקולוגיות והקשר ביניהם, חדרי הדירה האקולוגית ואופן החיים השיתופיים שקיימנו בהם, שיטות
      הקומפוסטציה המהפכניות שלנו, כולל שירותי קומפוסט בקומה השנייה בלב העיר. איך מתקיים הקשר בינינו
      כיום, כשאנחנו גרים בבתים שונים, וכמובן מבט אל החזון העתידי שלנו, לעץבעיר ובכלל.
    </Paragraph>
    <Paragraph>הרצאה מתובלת בהדגמות מעשיות קטנות והמון טיפים.</Paragraph>
    <Paragraph grow>ניתן לקבל את ההרצאה בזום או במפגש פנים אל פנים.</Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#4a3b35">
        להזמנת הרצאה
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTre_VisitTheTree_01_tami.jpg"
      alt=""
      width={720}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_BialikCircle_Liana.jpg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Batata_01_tami.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_AlonAviKabucha_01_Tami.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
  </ImageContainer>
);

const VirtualTour: React.FC = () => (
  <Tour bgcolor="#4a3b35" anchor="virtual" box={<Box />} images={<Images />} reverseLayout />
);

export default VirtualTour;

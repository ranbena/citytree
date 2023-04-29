import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import Tour from './Tour';
import { BoxInner, ButtonWrapper, Title } from './styles';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#fffcf0">
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
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#595337">
        להזמנת הרצאה של עינת
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTree_EinatWrites_02_tami.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={720}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_BigTree_02_Tami.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Soil_06_tami.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_harissa_Tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
  </ImageContainer>
);

const EinatLecture: React.FC = () => (
  <Tour bgcolor="#595337" anchor="einat" reverseLayout box={<Box />} images={<Images />} />
);

export default EinatLecture;

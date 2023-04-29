import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import topImage from 'src/assets/images/tours/Citytree_PorterTour_19_alex.jpeg';
import bottomImage from 'src/assets/images/tours/CityTree_Pomegranet_02_tami.jpg';
import { tamiPhoneLink, einatPhoneLink } from 'src/constants';
import { TopParallaxContent, BoxInner, Container, Hero, Wrapper, Title, Paragraph } from './styles';

const Content: React.FC<{ offsetY?: number }> = React.memo(({ offsetY = 0 }) => (
  <Container style={{ transform: `translateY(${offsetY}px)` }}>
    <Row>
      <Col md={12} lg={9}>
        <BoxInner>
          <Title>הרצאות סיורים וסדנאות מאת א'נשות העץ</Title>
          <Paragraph>הדרך הטובה ביותר להיחשף לידע שלנו היא… לפגוש אותנו!</Paragraph>
          <Paragraph>
            במשך 16 שנים חיינו יחדיו בלב תל אביב, בדירה האקולוגית להפליא של עץבעיר, שם חקרנו
            והתנסינו, ושם פגשנו את מי שרצו להיחשף לידע ולנסיון שנצבר בעץבעיר. במרץ 2023 עזבנו את
            כיכר ביאליק והתחלנו פרק חדש שפותח לנו אפשרויות חדשות למפגש.
          </Paragraph>
          <Paragraph>
            מוזמנים ומוזמנות לעיין באפשרויות וליצור איתנו קשר גם אם יש לכן משהו שונה בראש. ממילא כל
            מפגש, הרצאה או סיור נתפרים בהתאם לצרכים הספציפיים של מי שפונים אלינו.
          </Paragraph>
          <Paragraph>
            נשמח לשמוע מכן, בטלפון/ווטצאפ: {tamiPhoneLink} (תמי) או {einatPhoneLink} (עינת)
          </Paragraph>
          <Paragraph>
            <b>דפדפו ותמצאו את ההרצאה או הסיור שמתאים לכן...</b>
          </Paragraph>
        </BoxInner>
      </Col>
    </Row>
  </Container>
));

const Intro: React.FC = () => (
  <Wrapper>
    <Parallax bgImage={topImage} strength={200}>
      <TopParallaxContent />
    </Parallax>
    <Parallax
      className="bottomParallax"
      renderLayer={(percentage) => {
        const offsetY = percentage < 0.9 ? -175 * (0.9 - percentage) : 0;
        return (
          <Hero image={bottomImage} boxColor="#f2f9cfde" position="left">
            <Content offsetY={offsetY} />
          </Hero>
        );
      }}
    />
  </Wrapper>
);

export default Intro;

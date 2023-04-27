import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import topImage from 'src/assets/images/tours/Citytree_PorterTour_19_alex.jpeg';
import bottomImage from 'src/assets/images/tours/CityTree_Pomegranet_02_tami.jpg';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { tamiPhoneLink, einatPhoneLink } from 'src/constants';
import { TopParallaxContent, BoxInner, Container, Hero, Wrapper, Title, Paragraph } from './styles';

const Content: React.FC<{ offsetY?: number }> = React.memo(({ offsetY = 0 }) => (
  <Container style={{ transform: `translateY(${offsetY}px)` }}>
    <Row>
      <Col md={12} lg={9}>
        <BoxInner>
          <Title>
            <FormattedMessage id="tours.general.fullTitle" />
          </Title>
          <Paragraph intlId="tours.general.fullText" values={{ tamiPhoneLink, einatPhoneLink }} />
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

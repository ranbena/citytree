import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import topImage from 'src/assets/images/workshops/Workshops_01.jpeg';
import bottomImage from 'src/assets/images/workshops/Workshops_02.jpeg';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { TopParallaxContent, BoxInner, Container, Hero, Wrapper, Title, Paragraph } from './styles';

const Content: React.FC<{ offsetY?: number }> = React.memo(({ offsetY = 0 }) => (
  <Container style={{ transform: `translateY(${offsetY}px)` }}>
    <Row>
      <Col md={12} lg={9}>
        <BoxInner>
          <Title>
            <FormattedMessage id="practical-ecology.title" />
          </Title>
          <Paragraph intlId="practical-ecology.desc" />
        </BoxInner>
      </Col>
    </Row>
  </Container>
));

const Intro: React.FC = () => (
  <Wrapper>
    <Parallax bgImage={topImage} strength={200} className="topParallax">
      <TopParallaxContent />
    </Parallax>
    <Parallax
      className="bottomParallax"
      renderLayer={(percentage) => {
        const offsetY = percentage < 0.9 ? -200 * (0.9 - percentage) : 0;
        return (
          <Hero image={bottomImage} boxColor="#c8dcf0d0" position="left">
            <Content offsetY={offsetY} />
          </Hero>
        );
      }}
    />
  </Wrapper>
);

export default Intro;

import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/vision_bg.jpeg';
import './styles.scss';

function Vision() {
  return (
    <Hero image={image} boxColor="#b9d3d6cc" position="right" anchor="vision" className="vision">
      <Container className="vision">
        <Row>
          <Col lg={6}>
            <BoxInner className="vision-main">
              <Title className="vision-title">
                <FormattedMessage id="vision.general.title" />
              </Title>
              <Paragraph
                intlId="vision.general.text"
                values={{ b: (txt: string) => <strong>{txt}</strong> }}
              />
            </BoxInner>
          </Col>
          <Col lg={6} className="side-column">
            <Row>HI</Row>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Vision;

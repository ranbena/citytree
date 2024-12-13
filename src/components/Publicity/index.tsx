import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/publicity_bg.jpeg';
import { hugTheTreeUrl } from 'src/constants';
import Hero from '../Hero';
import Donate from './Publicity';
import './styles.scss';

function Publicity() {
  return (
    <Hero image={image} boxColor="#f8fbe4d6" anchor="publicity">
      <Container className="publicity">
        <Row>
          <Col lg={7}>
            <BoxInner fullHeight>
              <Title>רוני קובן ביקר ב 2019</Title>
              
            </BoxInner>
          </Col>
          <Col lg={5} className="side-column">
            <BoxInner fullHeight className="puclicity">
              
            </BoxInner>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Publicity;

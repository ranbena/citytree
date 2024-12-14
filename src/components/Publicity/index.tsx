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
        <Row className="row">
          <Col lg={7} >
            <BoxInner fullHeight>
              <Title>רוני קובן ביקר ב 2019</Title>
            </BoxInner>
          </Col>
          <Col lg={5} >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZWVLdQIfRR8?si=fMtnMzt4ntA9NCbc&amp;start=1140"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Publicity;

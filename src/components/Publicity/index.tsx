import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Title, Paragraph, BoxInner } from 'src/components/Box';
import LeafContainer from 'src/components/LeafContainer';
import image from 'src/assets/images/publicity_bg.jpeg';
import { hugTheTreeUrl } from 'src/constants';
import Hero from '../Hero';
import './styles.scss';

function Publicity() {
  return (
    <Hero image={image} boxColor="#f8fbe4d6" anchor="publicity">
      <Container className="publicity">
      <Row className="row">
          <Col lg={6}>
            <BoxInner>
              <Title>2019 - רוני קובן ביקר </Title>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <br />
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
        <Row className="row">
          <Col lg={6}>
            <BoxInner>
              <Title>2012</Title>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vZlXDHuqPcM?si=tbwwORn-o4g5_t6U"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <BoxInner>
              <Title>2022</Title>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Znnv-6D--M4?si=USmIOmV3MDb4T6n1"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <BoxInner>
              <Title>2022</Title>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <br />
            <iframe
              width="560"
              height="315"
              src="https://shakuf.co.il/40169"
              title="שקוף"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row className="row">
          <Col lg={6}>
            <BoxInner>
              <Title>2022</Title>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <br />
            <iframe
              title="אם נרצה 28 - ראיון עם תמי צרי מעץבעיר על אקולוגיה עירונית"
              height="400"
              width="100%"
              frameborder="1"
              scrolling="no"
              data-name="pb-iframe-player"
              src="https://www.podbean.com/player-v2/?from=embed&i=kzar4-116f307-pb&square=1&share=1&download=1&skin=f6f6f6&btn-skin=8bbb4e&size=300"
              allowfullscreen=""
            ></iframe>
          </Col>
        </Row>

        {/*
כתבה על אפס בית אדמה במגזין התרבות והאמנות "ערב רב":
https://www.erev-rav.com/archives/48838

 */}
      </Container>
    </Hero>
  );
}

export default Publicity;

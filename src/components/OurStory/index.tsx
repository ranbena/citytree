import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { title, text } from './constants';
import image from '../../images/our-story.jpg';
import './styles.scss';

export const OurStory = () => (
  <div className="ourStory" style={{ backgroundImage: `url(${image})` }}>
    <Container>
      <Row>
        <Col xl={6} lg={5} md={3} sm={0} />
        <Col xl={6} lg={7} md={9} sm={12}>
          <div className="box">
            <h1>{title}</h1>
            <>{text}</>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

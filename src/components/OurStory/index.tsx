import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { title, text } from './constants';
import image from '../../images/our-story.jpg';
import './styles.scss';

export const OurStory = () => (
  <div className="ourStory container-padding" style={{ backgroundImage: `url(${image})` }}>
    <Container>
      <Row>
        <Col lg={4} sm={0} />
        <Col lg={8} sm={12}>
          <div className="box">
            <h1>{title}</h1>
            <>{text}</>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

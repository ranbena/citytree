import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { title, text } from './constants';
import image from '../../images/our-vision.jpg';
import './styles.scss';

export const OurVision = () => (
  <div className="anchor" id="vision">
    <div className="ourVision" style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Col xl={7} lg={8} md={10} sm={12}>
          <div className="box transparent-box">
            <h1>{title}</h1>
            <>{text}</>
          </div>
        </Col>
      </Container>
    </div>
  </div>
);

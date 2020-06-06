import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { title, text } from './constants';
import image from '../../images/our-vision.jpg';
import './styles.scss';

export const OurVision = () => (
  <Parallax bgImage={image} strength={300}>
    <div className="ourVision anchorWrapper">
      <div className="anchor" id="vision" />
      <Container>
        <Col lg={6} md={11}>
          <h1>{title}</h1>
          <>{text}</>
        </Col>
      </Container>
    </div>
  </Parallax>
);

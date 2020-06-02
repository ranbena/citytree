import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import { title, text } from './constants';
import image from '../../images/our-vision.jpg';
import './styles.scss';

export const OurVision = () => (
  <div className="anchor" id="vision">
    <Parallax bgImage={image} strength={300}>
      <div className="ourVision">
        <Container>
          <Col xl={7} lg={8} md={10}>
            <div className="box transparent-box">
              <h1>{title}</h1>
              <>{text}</>
            </div>
          </Col>
        </Container>
      </div>
    </Parallax>
  </div>
);

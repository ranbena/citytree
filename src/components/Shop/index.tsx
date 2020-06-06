import React from 'react';
import { Container } from 'react-bootstrap';
import { title, text } from './constants';
import './styles.scss';

export const Shop = () => (
  <div className="shop anchorWrapper">
    <div className="anchor" id="shop" />
    <Container>
      <h2>{title}</h2>
      <div>{text}</div>
    </Container>
  </div>
);

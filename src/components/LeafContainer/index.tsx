import React from 'react';
import { Container } from 'react-bootstrap';
import leftBush from 'src/assets/images/bush-left.png';
import rightBush from 'src/assets/images/bush-right.png';
import './styles.scss';

const LeafContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container className="leafContainer">
    <div className="leftBush" />
    <div className="rightBush" />
    {children}
  </Container>
);

export default LeafContainer;

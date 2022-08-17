import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.scss';

const LeafContainer: React.FC<{ children: React.ReactNode; opacity?: number }> = ({
  opacity = 1,
  children,
}) => (
  <Container className="leafContainer">
    <div className="leftBush" style={{ opacity }} />
    <div className="rightBush" style={{ opacity }} />
    {children}
  </Container>
);

export default LeafContainer;

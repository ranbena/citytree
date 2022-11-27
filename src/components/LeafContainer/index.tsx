import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.scss';

const LeafContainer: React.FC<{
  children: React.ReactNode;
  include?: 'left' | 'right' | 'both';
  opacity?: number;
  excludeDefaultClassName?: boolean;
}> = ({ opacity = 1, include = 'both', excludeDefaultClassName, children }) => {
  const includeLeft = include === 'both' || include === 'left';
  const includeRight = include === 'both' || include === 'right';

  const content = (
    <>
      {includeLeft && <div className="leftBush" style={{ opacity }} />}
      {includeRight && <div className="rightBush" style={{ opacity }} />}
      {children}
    </>
  );

  if (excludeDefaultClassName) {
    return <div className="leafContainer">{content}</div>;
  }

  return <Container className="leafContainer">{content}</Container>;
};

export default LeafContainer;

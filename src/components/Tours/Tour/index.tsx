import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeafContainer from 'src/components/LeafContainer';
import { Hero } from './styles';

interface IProps {
  anchor: 'group' | 'private' | 'forage' | 'magic';
  box: React.ReactNode;
  images: React.ReactNode;
  bgcolor: string;
  reverseLayout?: boolean;
}

const Tour: React.FC<React.PropsWithChildren<IProps>> = ({
  anchor,
  box,
  images,
  bgcolor,
  reverseLayout,
}) => (
  <Hero anchor={anchor} bgColor={bgcolor}>
    <LeafContainer opacity={0.2}>
      <Row style={{ flexDirection: reverseLayout ? 'row-reverse' : 'row' }}>
        <Col lg={6}>{box}</Col>
        <Col lg={6} className="side-column">
          {images}
        </Col>
      </Row>
    </LeafContainer>
  </Hero>
);

export default Tour;

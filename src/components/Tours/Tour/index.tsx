import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeafContainer from 'src/components/LeafContainer';
import { Hero, ImageContainer } from './styles';

interface IProps {
  anchor: 'group' | 'private' | 'forage' | 'magic';
  mainImage: string;
  thumbImages: string[];
  bgcolor: string;
  reverseLayout?: boolean;
}

const Tour: React.FC<React.PropsWithChildren<IProps>> = ({
  anchor,
  mainImage,
  thumbImages,
  bgcolor,
  reverseLayout,
  children,
}) => (
  <Hero anchor={anchor} bgColor={bgcolor}>
    <LeafContainer opacity={0.2}>
      <Row style={{ flexDirection: reverseLayout ? 'row-reverse' : 'row' }}>
        <Col lg={6}>{children}</Col>
        <Col lg={6} className="side-column">
          <ImageContainer>
            <img src={mainImage} alt="" loading="lazy" />
            {thumbImages.map((src) => (
              <img src={src} alt="" loading="lazy" />
            ))}
          </ImageContainer>
        </Col>
      </Row>
    </LeafContainer>
  </Hero>
);

export default Tour;

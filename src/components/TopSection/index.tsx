import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { title, text, youtubeId, imageUrl } from './constants';
import './styles.scss';

export const TopSection: React.FC<{}> = () => (
  <section className="topSection">
    <Container>
      <Row className="flex-row-reverse">
        <Col md={7}>
          {youtubeId && (
            <iframe
              className="bg2 full-video"
              allowFullScreen
              title="video"
              width="100%"
              height="350"
              src={`https://www.youtube.com/embed/${youtubeId}?origin=http://citytree.com&amp;playsinline=1&amp;color=white&amp;fs=1`}
              frameBorder="0"
            />
          )}
          {imageUrl && (
            <img src={imageUrl} alt="Thank you" width="100%" height="350" />
          )}
        </Col>
        <Col md={5}>
          <h1>{title}</h1>
          {text}
        </Col>
      </Row>
    </Container>
  </section>
);

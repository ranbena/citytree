import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  topSectionTitle,
  topSectionText,
  topSectionYoutubeId,
} from '../../constants/Home';
import './styles.scss';

export const TopSection: React.FC<{}> = () => (
  <section className="topSection">
    <Container>
      <Row className="flex-row-reverse">
        <Col md={7}>
          <iframe
            className="bg2 full-video"
            allowFullScreen="allowFullScreen"
            title="video"
            type="text/html"
            width="100%"
            height="350"
            src={`https://www.youtube.com/embed/${topSectionYoutubeId}?origin=http://citytree.com&amp;playsinline=1&amp;color=white&amp;fs=1`}
            frameBorder="0"
          />
        </Col>
        <Col md={5}>
          <h1>{topSectionTitle}</h1>
          <p>{topSectionText}</p>
        </Col>
      </Row>
    </Container>
  </section>
);

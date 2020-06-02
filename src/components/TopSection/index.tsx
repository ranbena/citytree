import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import { title, text, youtubeId, imageUrl } from './constants';
import leafImageUrl from '../../images/leaf-top.png';
import './styles.scss';

export const TopSection: React.FC<{}> = () => (
  <section className="topSection">
    <Parallax bgImage={leafImageUrl} strength={500} bgClassName="leaf">
      <Container>
        <Row className="flex-row-reverse">
          <Col lg={7}>
            {youtubeId && (
              <iframe
                className="visual"
                allowFullScreen
                title="video"
                width="100%"
                height="350"
                src={`https://www.youtube.com/embed/${youtubeId}?origin=http://citytree.com&amp;playsinline=1&amp;color=white&amp;fs=1`}
                frameBorder="0"
              />
            )}
            {imageUrl && <img src={imageUrl} className="visual" alt="Thank you" width="100%" />}
          </Col>
          <Col lg={5}>
            <h1>{title}</h1>
            {text}
          </Col>
        </Row>
      </Container>
    </Parallax>
  </section>
);

import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { forEachMessage } from '@/utils';

import leafImageUrl from '@/images/leaf-top.png';
import mainImageUrl from '@/images/thanks.jpg';

import './styles.scss';

const TopSection: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="topSection">
      <Parallax bgImage={leafImageUrl} strength={200} bgClassName="leaf">
        <Container>
          <Row className="flex-row-reverse">
            <Col lg={7}>
              {/* {youtubeId && (
              <iframe
                className="visual"
                allowFullScreen
                title="video"
                width="100%"
                height="350"
                src={`https://www.youtube.com/embed/${youtubeId}?origin=http://citytree.com&amp;playsinline=1&amp;color=white&amp;fs=1`}
                frameBorder="0"
              />
            )} */}
              <img
                src={mainImageUrl}
                className="visual"
                alt={intl.formatMessage({ id: 'top.visual-text' })}
                width="100%"
              />
            </Col>
            <Col lg={5} className="topSectionText">
              <h1>
                <FormattedMessage id="top.title" />
              </h1>
              {forEachMessage(intl, 'top.text').map((txt: string) => (
                <p key={txt}>{txt}</p>
              ))}
            </Col>
          </Row>
        </Container>
      </Parallax>
    </section>
  );
};

export default TopSection;

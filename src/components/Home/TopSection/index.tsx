import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { forEachMessage } from 'src/utils';
import LeafContainer from 'src/components/LeafContainer';

import './styles.scss';

const youtubeId = 'gZpRyenUgKw';

const TopSection: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="topSection" id="top">
      <LeafContainer>
        <Row className="row">
          <Col lg={6}>
            <iframe
              className="visual"
              allowFullScreen
              title="video"
              width="100%"
              height="350"
              src={`https://www.youtube.com/embed/${youtubeId}?origin=http://citytree.com&amp;playsinline=1&amp;color=white&amp;fs=1&amp;modestbranding=1`}
              frameBorder="0"
            />
          </Col>
          <Col lg={6} className="topSectionText">
            <h1>
              <FormattedMessage id="top.title" />
            </h1>
            {forEachMessage(intl, 'top.text').map(([txt, key]) => (
              <p key={key}>{txt}</p>
            ))}
          </Col>
        </Row>
      </LeafContainer>
    </section>
  );
};

export default TopSection;

import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Container, Col, Row } from 'react-bootstrap';
import { forEachMessage } from 'src/utils';
import './styles.scss';
import { wikiUrl } from 'src/constants';

const OurStory: FC = () => {
  const intl = useIntl();

  return (
    <div className="ourStory anchorWrapper">
      <div className="anchor" id="story" />
      <Container>
        <Row>
          <Col lg={3} sm={0} />
          <Col lg={9} sm={12}>
            <div className="box">
              <h1>
                <FormattedMessage id="story.title" />
              </h1>
              {forEachMessage(intl, 'story.text').map(([txt, key]) => (
                <p key={key}>{txt}</p>
              ))}
              {'story.wiki' in intl.messages && (
                <p>
                  <FormattedMessage
                    id="story.wiki"
                    defaultMessage=""
                    values={{
                      a: (txt: string) => (
                        <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
                          {txt}
                        </a>
                      ),
                    }}
                  />
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurStory;

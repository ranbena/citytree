import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { forEachMessage } from 'src/utils';

import image from 'src/assets/images/about-us.jpeg';

import './styles.scss';

const AboutUsSection: FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <Row>
        <Col xl={5} lg={6} sm={0}>
          <div className="aboutUsVisual" style={{ backgroundImage: `url(${image})` }} />
        </Col>
        <Col xl={7} lg={6} sm={12}>
          <div className="box">
            <h1>
              <FormattedMessage id="about.title" />
            </h1>
            {forEachMessage(intl, 'about.text').map(([txt, key]) => (
              <p key={key}>{txt}</p>
            ))}
            {'about.whitepaper' in intl.messages && (
              <p>
                <FormattedMessage
                  id="about.whitepaper"
                  defaultMessage=""
                  values={{
                    a: (txt: string) => (
                      <a
                        href="https://docs.google.com/document/d/1b_J-MArPb-HrdbwanwqlwcGY1L7Zy3_aEeqj-rMNIAI/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
  );
};

export default AboutUsSection;

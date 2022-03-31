import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { storeUrl, emailLink } from 'src/constants';

import visitImage from 'src/assets/images/visit.jpeg';

import './styles.scss';

const VisitSection: FC = () => (
  <div className="visitSection" style={{ backgroundImage: `url(${visitImage})` }}>
    <Container>
      <Row>
        <Col xl={5} lg={4} md={2} sm={0} />
        <Col xl={7} lg={8} md={10} sm={12}>
          <div className="box">
            <h1>
              <FormattedMessage id="visit.title" />
            </h1>
            <div className="visitText">
              <p>
                <FormattedMessage id="visit.text.0" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub1" />
                </strong>
                <FormattedMessage id="visit.text.1" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub2" />
                </strong>
                <FormattedMessage id="visit.text.2" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub3" />
                </strong>
                <FormattedMessage id="visit.text.3" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub4" />
                </strong>
                <FormattedMessage id="visit.text.4" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub5" />
                </strong>
                <FormattedMessage id="visit.text.5" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub6" />
                </strong>
                <FormattedMessage id="visit.text.6" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub7" />
                </strong>
                <FormattedMessage id="visit.text.7" />
              </p>
              <p>
                <strong>
                  <FormattedMessage id="visit.sub8" />
                </strong>
                <FormattedMessage
                  id="visit.text.8"
                  values={{
                    shop: (txt: string) => (
                      <a href={storeUrl} target="blank">
                        {txt}
                      </a>
                    ),
                  }}
                />
              </p>
              <p>
                <FormattedMessage id="visit.text.9" />
              </p>
              <p>~~~~</p>
              <p>
                <strong>
                  <FormattedMessage id="visit.subtitle" />
                </strong>
                <br />
                {emailLink}
                <br />
                <FormattedMessage id="phone">
                  {(phone) => <a href={`tel:${phone}`}>{phone}</a>}
                </FormattedMessage>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default VisitSection;

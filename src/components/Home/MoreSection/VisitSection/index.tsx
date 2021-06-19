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
                <FormattedMessage id="visit.text.1" />
              </p>
              <p>
                <FormattedMessage
                  id="visit.text.2"
                  values={{
                    shop: (txt: string) => (
                      <a href={storeUrl} target="blank">
                        {txt}
                      </a>
                    ),
                  }}
                />
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

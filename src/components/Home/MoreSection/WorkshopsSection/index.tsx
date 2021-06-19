import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { emailLink, phoneLink, whatsappLink } from 'src/constants';

import image from 'src/assets/images/workshops.jpeg';

import './styles.scss';

const WorkshopsSection: FC = () => (
  <div className="workshopsSection" style={{ backgroundImage: `url(${image})` }}>
    <Container>
      <Row>
        <Col xl={5} lg={4} md={2} sm={0} />
        <Col xl={7} lg={8} md={10} sm={12}>
          <div className="box">
            <h1>
              <FormattedMessage id="workshops.title" />
            </h1>
            <div className="visitText">
              <p>
                <FormattedMessage id="workshops.text.0" />
              </p>
              <p>
                <FormattedMessage id="workshops.text.1" />
              </p>
              <p>
                <FormattedMessage id="workshops.text.2" />
              </p>
              <p>~~~~</p>
              <p>
                <strong>
                  <FormattedMessage id="workshops.subtitle" />
                </strong>
                <br />
                {emailLink}
                <br />
                <FormattedMessage
                  id="workshops.contact"
                  values={{ phone: phoneLink, whatsapp: whatsappLink }}
                />
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default WorkshopsSection;

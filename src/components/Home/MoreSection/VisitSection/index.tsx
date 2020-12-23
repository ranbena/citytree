import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { emailLink } from '@/constants';
import { forEachMessage } from '@/utils';

import './styles.scss';

const VisitSection: FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <div className="tab-content box">
        <h1>
          <FormattedMessage id="visit.title" />
        </h1>
        <div className="visitSection">
          <div className="visitText">
            {forEachMessage(intl, 'visit.text').map((txt: string) => (
              <p key={txt}>{txt}</p>
            ))}
          </div>
          <div>
            <iframe
              title={intl.formatMessage({ id: 'visit.mapAltText' })}
              src={intl.formatMessage({ id: 'visit.mapUrl' })}
              width="100%"
              height="300"
              frameBorder="0"
              aria-hidden="false"
              allowFullScreen
            />
            <h2>
              <FormattedMessage id="visit.addressTitle" />
              <address>
                <FormattedMessage id="address" />
              </address>
            </h2>
            <h3>
              {emailLink}
              <br />
              <FormattedMessage id="phone">
                {(phone) => <a href={`tel:${phone}`}>{phone}</a>}
              </FormattedMessage>
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VisitSection;

import React, { FC } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useIntl, FormattedMessage, FormattedDate, FormattedTime } from 'gatsby-plugin-intl';

import { events } from './events';

import { emailLink } from '../../../constants';
import { forEachMessage } from '../../../utils';

import './styles.scss';

const now = Date.now();

const WorkshopsSection: FC = () => {
  const intl = useIntl();
  let upcomingEventFlag = false;

  return (
    <Container>
      <div className="tab-content box">
        <h1>
          <FormattedMessage id="workshops.title" />
        </h1>
        <Row>
          <Col xl={8} lg={9}>
            <div className="workshopsSection">
              {forEachMessage(intl, 'workshops.text').map((txt) => (
                <p>{txt}</p>
              ))}
              <br />
              <FormattedMessage id="workshops.events.title" />
              <br />
              <br />
              <ul>
                {events.map(({ url, image, id, date, type, locale = intl.defaultLocale }) => {
                  const key = `workshops.events.titles.${id}`;
                  if (!(key in intl.messages)) {
                    return null;
                  }
                  const title = intl.formatMessage({ id: key });
                  const dateObject = new Date(date);
                  const isPast = now - dateObject.getTime() > 0;
                  const isUpcomingEvent = !isPast && !upcomingEventFlag;
                  if (isUpcomingEvent) {
                    upcomingEventFlag = true;
                  }

                  return (
                    <li key={id} data-past={isPast}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={title} />
                      </a>
                      <div>
                        <h2>
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                          </a>
                        </h2>
                        <span className="date">
                          <FormattedDate
                            value={dateObject}
                            year="numeric"
                            month="long"
                            day="2-digit"
                          />{' '}
                          &nbsp;&nbsp;·&nbsp;&nbsp;
                          <FormattedTime value={dateObject} />
                        </span>
                        <div>
                          {isUpcomingEvent && (
                            <Badge variant="primary">
                              ★ <FormattedMessage id="workshops.events.upcoming" />
                            </Badge>
                          )}{' '}
                          <Badge variant="light">
                            <FormattedMessage id={`workshops.events.${type}`} />
                          </Badge>{' '}
                          {locale !== intl.locale && (
                            <Badge variant="light">
                              <FormattedMessage id={`workshops.events.${locale}`} />
                            </Badge>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <FormattedMessage id="workshops.subtitle" />:
              <br />
              {emailLink}
              <br />
              <FormattedMessage id="phone">
                {(phone) => <a href={`tel:${phone}`}>{phone}</a>}
              </FormattedMessage>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default WorkshopsSection;

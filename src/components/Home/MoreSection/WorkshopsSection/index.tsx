import React, { FC, useEffect, useRef } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useIntl, FormattedMessage, FormattedDate, FormattedTime } from 'gatsby-plugin-intl';

import { emailLink } from 'src/constants';
import { forEachMessage } from 'src/utils';
import { events } from './events';

import './styles.scss';

const now = Date.now();

const WorkshopsSection: FC = () => {
  const intl = useIntl();
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // add [data-past] attribute (must not be prerendered)
    ref.current.querySelectorAll('li').forEach((li) => {
      const time = Number(li.getAttribute('data-time'));
      const isPast = now - time > 0;
      li.setAttribute('data-past', isPast.toString());
    });
  }, []);

  return (
    <Container>
      <div className="tab-content box">
        <h1>
          <FormattedMessage id="workshops.title" />
        </h1>
        <Row>
          <Col xl={8} lg={9}>
            <div className="workshopsSection">
              {forEachMessage(intl, 'workshops.text').map(([txt, key]) => (
                <p key={key}>{txt}</p>
              ))}
              <br />
              {!!events.length && (
                <>
                  <FormattedMessage id="workshops.events.title" />
                  <br />
                  <br />
                </>
              )}
              <ul ref={ref}>
                {events.map(({ url, image, id, date, type, locale = intl.defaultLocale }) => {
                  const key = `workshops.events.titles.${id}`;
                  if (!(key in intl.messages)) {
                    return null;
                  }
                  const title = intl.formatMessage({ id: key });
                  const dateObject = new Date(date);

                  return (
                    <li key={id} data-time={dateObject.getTime()}>
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
                          <Badge variant="primary" className="upcoming">
                            ★ <FormattedMessage id="workshops.events.upcoming" />
                          </Badge>{' '}
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

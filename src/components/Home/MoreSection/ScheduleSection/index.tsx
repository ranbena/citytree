import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { emailLink, calendarUrl, phoneLink } from 'src/constants';

const ScheduleSection: FC = () => {
  const intl = useIntl();

  const url = 'https://calendar.google.com/calendar/b/1/embed';
  const params = {
    wkst: 1,
    color: '#000000',
    bgcolor: '#ffffff',
    ctz: 'Asia-Jerusalem',
    src: 'Zm1oajBuMmFudjlwcnNvcXVob2MyMmc4bTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
    mode: 'WEEK',
    showTabs: 0,
    showCalendars: 0,
    showTz: 0,
    showPrint: 0,
    showTitle: 0,
    showNav: 1,
  };

  const urlParams = Object.entries(params)
    .map(([k, v]) => `${k}=${escape(v.toString())}`)
    .join('&');

  return (
    <Container>
      <Row>
        <Col xl={7} lg={6} sm={12}>
          <div className="box fullheight">
            <h1>
              <FormattedMessage id="schedule.title" />
            </h1>
            <p>
              <FormattedMessage id="schedule.text.0" />
            </p>
            <p>
              <FormattedMessage id="schedule.text.1" />
            </p>
            <p>
              <FormattedMessage id="schedule.text.2" />
            </p>
            <p>
              <FormattedMessage id="schedule.text.3" />
            </p>
            <p>
              <FormattedMessage
                id="schedule.text.4"
                values={{ calendar: (txt: string) => <a href={calendarUrl}>{txt}</a> }}
              />
            </p>
            <p>
              <FormattedMessage id="schedule.text.5" />
            </p>
            <p>
              <FormattedMessage
                id="schedule.contact"
                values={{ phone: phoneLink, email: emailLink }}
              />
            </p>
          </div>
        </Col>
        <Col xl={5} lg={6} sm={12}>
          <div className="box" style={{ padding: 20 }}>
            <iframe
              title={intl.formatMessage({ id: 'schedule.title' })}
              src={`${url}?${urlParams}`}
              width="100%"
              height="500"
              frameBorder="0"
              aria-hidden="false"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ScheduleSection;

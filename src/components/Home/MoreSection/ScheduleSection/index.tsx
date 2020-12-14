import React, { FC, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { emailLink } from 'src/constants';
import { forEachMessage } from 'src/utils';

import './styles.scss';

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

const ScheduleSection: FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <div className="tab-content box">
        <h1>
          <FormattedMessage id="schedule.subtitle" />
        </h1>
        <div className="scheduleSection">
          <div className="scheduleText">
            {forEachMessage(intl, 'schedule.text1').map(([txt, key]) => (
              <Fragment key={key}>
                {txt}
                <br />
              </Fragment>
            ))}
            <br />
            <br />
            {forEachMessage(intl, 'schedule.text2').map(([txt, key]) => (
              <Fragment key={key}>
                {txt}
                <br />
              </Fragment>
            ))}
            <FormattedMessage
              id="schedule.contact"
              values={{
                phone: intl.formatMessage({ id: 'phone' }),
                email: emailLink,
              }}
            />
          </div>
          <div>
            <iframe
              title={intl.formatMessage({ id: 'schedule.title' })}
              src={`${url}?${urlParams}`}
              width="100%"
              height="600"
              frameBorder="0"
              aria-hidden="false"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ScheduleSection;

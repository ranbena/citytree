import React, { FC, useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { Tabs } from './constants';
import { ITabs } from './types';
import { phoneLink, emailLink, address } from '../../constants';
import './styles.scss';

const tabKeys = Tabs.map(({ key }) => key);

const renderMoreSectionContent = (data: ITabs) => {
  switch (data.key) {
    case 'about':
      return <AboutUsSection {...data} />;
      break;

    case 'visit':
      return <VisitSection {...data} />;
      break;

    case 'schedule':
      return <ScheduleSection {...data} />;
      break;

    case 'workshops':
      return <WorkshopsSection {...data} />;
      break;

    default:
      return null;
  }
};

const WorkshopsSection: FC<ITabs> = ({ title, subtitle, text, events }) => (
  <Container>
    <div className="tab-content box">
      <h1>{title}</h1>
      <Row>
        <Col xl={8} lg={9}>
          <div className="workshopsSection">
            {text}
            <br />
            <br />
            <ul>
              {events.map((event) => (
                <li key={event.facebookEventUrl}>
                  <a href={event.facebookEventUrl} target="_blank" rel="noopener noreferrer">
                    {event.title}
                  </a>
                </li>
              ))}
            </ul>
            {subtitle}:
            <br />
            {emailLink}
            <br />
            {phoneLink}
          </div>
        </Col>
      </Row>
    </div>
  </Container>
);

const VisitSection: FC<ITabs> = ({ title, text, mapUrl, addressTitle }) => (
  <Container>
    <div className="tab-content box">
      <h1>{title}</h1>
      <div className="visitSection">
        <div className="visitText">{text}</div>
        <div>
          <iframe
            title="מיקום במפה"
            src={mapUrl}
            width="100%"
            height="300"
            frameBorder="0"
            aria-hidden="false"
            allowFullScreen
          />
          <h2>
            {addressTitle}
            <address>{address}</address>
          </h2>
          <h3>
            {emailLink}
            <br />
            {phoneLink}
          </h3>
        </div>
      </div>
    </div>
  </Container>
);

const AboutUsSection: FC<ITabs> = ({ title, text, imageUrl }) => (
  <div className="aboutUsSection" style={{ backgroundImage: `url(${imageUrl})` }}>
    <Container>
      <Row>
        <Col xl={6} lg={5} md={3} sm={0} />
        <Col xl={6} lg={7} md={9} sm={12}>
          <div className="box">
            <h1>{title}</h1>
            <>{text}</>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const ScheduleSection: FC<ITabs> = ({ subtitle, text, calendarUrl: cal }) => {
  const urlParams = Object.entries(cal.params)
    .map(([k, v]) => `${k}=${escape(v.toString())}`)
    .join('&');

  return (
    <Container>
      <div className="tab-content box">
        <h1>{subtitle}</h1>
        <div className="scheduleSection">
          <div className="scheduleText">{text}</div>
          <div>
            <iframe
              title="לוח הזמנים"
              src={`${cal.url}?${urlParams}`}
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

export const MoreSection: React.FC<{}> = () => {
  const [tabKey, setTabKey] = useState(Tabs[0].key);
  const el = useRef(null);

  function onHistoryChange() {
    const hashKey = window.location.hash.substr(1); // remove '#'
    if (hashKey && tabKeys.includes(hashKey)) {
      setTabKey(hashKey);
      el.current.scrollIntoView();
    }
  }

  useEffect(() => {
    onHistoryChange();
    window.addEventListener('popstate', onHistoryChange);
    return () => window.removeEventListener('popstate', onHistoryChange);
  }, []);

  return (
    <section className="moreSection anchorWrapper" ref={el}>
      <div id={tabKey} className="anchor" />
      <Tab.Container transition={false} activeKey={tabKey}>
        <div className="tabs">
          <Container>
            <Nav>
              {Tabs.map(({ key, title }) => (
                <Nav.Item key={key}>
                  <Nav.Link href={`#${key}`} active={key === tabKey}>
                    {title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Container>
        </div>
        <Tab.Content>
          {Tabs.map((data) => {
            const { key } = data;
            return (
              <Tab.Pane eventKey={key} key={key} mountOnEnter>
                {renderMoreSectionContent(data)}
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

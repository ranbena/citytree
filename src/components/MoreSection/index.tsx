import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { Tabs } from './constants';
import { phone, email, address } from '../../constants';
import './styles.scss';

const tabKeys = Tabs.map(({ key }) => key);

const renderMoreSectionContent = (data) => {
  const { key } = data;
  if (key === 'visit') {
    return <VisitSection {...data} />;
  }

  if (key === 'about') {
    return <AboutUsSection {...data} />;
  }

  // coming soon <Workshops /> and <Schedule />

  const { title, text } = data;
  return (
    <Container>
      <div className="tab-content box">
        <h1>{title}</h1>
        {text}
      </div>
    </Container>
  );
};

const VisitSection = ({ title, text, mapUrl, addressTitle }) => (
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
            Email: <a href={`mail:${email}`}>{email}</a>
            <br />
            Phone: <a href={`tel:${phone}`}>{phone}</a>
          </h3>
        </div>
      </div>
    </div>
  </Container>
);

const AboutUsSection = ({ title, text, imageUrl }) => (
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
    <section className="moreSection anchor" ref={el} id={tabKey}>
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
              <Tab.Pane eventKey={key} key={key} className="container-padding">
                {renderMoreSectionContent(data)}
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

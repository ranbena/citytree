import React, { FC, useEffect, useState } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import { FormattedMessage } from 'gatsby-plugin-intl';

import AboutUsSection from './AboutUsSection';
import VisitSection from './VisitSection';
import WorkshopsSection from './WorkshopsSection';
import ScheduleSection from './ScheduleSection';

import './styles.scss';

const tabKeys = ['visit', 'workshops', 'schedule', 'about'] as const;
export type TabKey = typeof tabKeys[number];

const MoreSection: React.FC = () => {
  const [tabKey, setTabKey] = useState<TabKey>('visit');

  function onHistoryChange() {
    const hashKey = window.location.hash.substr(1) as TabKey; // remove '#'
    if (hashKey && tabKeys.includes(hashKey)) {
      setTabKey(hashKey);
    }
  }

  useEffect(() => {
    onHistoryChange();
    window.addEventListener('popstate', onHistoryChange);
    return () => window.removeEventListener('popstate', onHistoryChange);
  }, []);

  return (
    <section className="moreSection anchorWrapper">
      {tabKeys.map((tk) => (
        <div id={tk} key={tk} className="anchor" />
      ))}
      <Tab.Container transition={false} activeKey={tabKey}>
        <div className="tabs">
          <Container>
            <Nav>
              <Nav.Item>
                <Nav.Link href="#visit" active={tabKey === 'visit'}>
                  <FormattedMessage id="visit.tabTitle" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#workshops" active={tabKey === 'workshops'}>
                  <FormattedMessage id="workshops.tabTitle" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#schedule" active={tabKey === 'schedule'}>
                  <FormattedMessage id="schedule.tabTitle" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about" active={tabKey === 'about'}>
                  <FormattedMessage id="about.tabTitle" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="visit" key="visit" mountOnEnter>
            <VisitSection />;
          </Tab.Pane>
          <Tab.Pane eventKey="schedule" key="schedule" mountOnEnter>
            <ScheduleSection />;
          </Tab.Pane>
          <Tab.Pane eventKey="workshops" key="workshops" mountOnEnter>
            <WorkshopsSection />;
          </Tab.Pane>
          <Tab.Pane eventKey="about" key="about" mountOnEnter>
            <AboutUsSection />;
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};

export default MoreSection;

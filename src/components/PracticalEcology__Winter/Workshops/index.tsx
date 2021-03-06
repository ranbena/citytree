import React, { FC, useEffect, useState } from 'react';
import { Container, Nav, Tab as BSTab } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import Table from './Table';
import events from './events';
import {
  Wrapper,
  Title,
  Subtitle,
  Tabs,
  Tab,
  Content,
  BottomNav,
  Next,
  Prev,
  Prefix,
} from './styles';

const tabKeys = ['prosperity', 'agriculture', 'cultivation'] as const;
export type TabKey = typeof tabKeys[number];

const getId = (...keys: (string | number)[]) =>
  `practical-ecology-winter.workshops.${keys.join('.')}`;
const getTitle = (tabKey: TabKey) => <FormattedMessage id={getId(tabKey, 'title')} />;
const getEvents = (tabKey: TabKey) =>
  Object.entries(events[tabKey].eventDates).map(([index, date]) => ({
    index: Number(index),
    title: <FormattedMessage id={getId('events', index)} />,
    date,
  }));
const getDefaultTabKey = () => {
  const now = Date.now();
  const found = tabKeys.find((tabKey) => {
    const endDate = new Date(events[tabKey].end).getTime();
    return now < endDate;
  });

  return found || tabKeys[0];
};

const Component: FC = () => {
  const { formatMessage } = useIntl();
  const [tabKey, setTabKey] = useState<TabKey>('prosperity');

  useEffect(() => {
    setTabKey(getDefaultTabKey());
  }, []);

  const renderNextLink = () => {
    const nextKey = tabKey === 'prosperity' ? 'agriculture' : 'cultivation';
    return (
      <Next onClick={() => setTabKey(nextKey)} $hidden={tabKey === 'cultivation'}>
        <Prefix>
          <FormattedMessage id="practical-ecology-winter.workshops.next" />:
        </Prefix>{' '}
        {getTitle(nextKey)}
      </Next>
    );
  };

  const renderPreviousLink = () => {
    const prevKey = tabKey === 'cultivation' ? 'agriculture' : 'prosperity';
    return (
      <Prev onClick={() => setTabKey(prevKey)} $hidden={tabKey === 'prosperity'}>
        <Prefix>
          <FormattedMessage id="practical-ecology-winter.workshops.prev" />:
        </Prefix>{' '}
        {getTitle(prevKey)}
      </Prev>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Title>
          <FormattedMessage id="practical-ecology-winter.workshops.title" />
        </Title>
        <Subtitle>
          <FormattedMessage id="practical-ecology-winter.workshops.subtitle" />
        </Subtitle>

        <BSTab.Container transition={false} activeKey={tabKey}>
          <Tabs>
            {tabKeys.map((key) => (
              <Tab key={key} tabKey={key}>
                <Nav.Link eventKey={key} onClick={() => setTabKey(key)} active={tabKey === key}>
                  {getTitle(key)}
                </Nav.Link>
              </Tab>
            ))}
          </Tabs>
          <Content tabKey={tabKey}>
            {tabKeys.map((key) => (
              <BSTab.Pane eventKey={key} key={key}>
                <Table
                  tabKey={tabKey}
                  title={getTitle(key)}
                  season={formatMessage({ id: getId(key, 'season') })}
                  element={formatMessage({ id: getId(key, 'element') })}
                  dates={[events[key].start, events[key].end]}
                  events={getEvents(key)}
                />
              </BSTab.Pane>
            ))}
            <BottomNav>
              {renderPreviousLink()}
              {renderNextLink()}
            </BottomNav>
          </Content>
        </BSTab.Container>
      </Container>
    </Wrapper>
  );
};

export default Component;

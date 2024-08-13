import React, { FC, useEffect, useState } from 'react';
import { Container, Nav, Tab as BSTab } from 'react-bootstrap';
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

const tabKeys = ['usefulness', 'movement', 'satisfaction'] as const;
export type TabKey = typeof tabKeys[number];

const data: Record<TabKey, { title: string; season: string; element: string }> = {
  usefulness: {
    title: 'מועילות',
    season: 'אביב',
    element: 'אש',
  },
  movement: {
    title: 'תנועה',
    season: 'קיץ',
    element: 'אש',
  },
  satisfaction: {
    title: 'הסתפקות',
    season: 'קיץ',
    element: 'מים',
  },
};

const eventNames: Record<string, string> = {
  1: 'על המכונה ועל הכביסה – סדנת פתיחה',
  2: 'זבת חלב – סדנה לשבועות',
  3: 'צמחים אהובים בקיץ – כותנה, מורינגה ובטטה',
  4: 'קומפוסט והעיר הגדולה: תולעים אדומות',
  5: 'הלו אלוורה – צמח הקסם',
  6: 'הצלת ירוקים ומצעים - הצלת מזון במאה ה-21',
  7: 'על האוכל ועל הבוקר – על הרעב ועל השובע',
  8: 'על הזיעה – עושות לעצמנו דאודורנט',
  9: 'לחם והחיידקים – איך עושות לחם ונשארות בחיים',
  10: 'התחדשות – על נבטים ונבטוטים',
  11: 'התיידדות עם החום הגדול',
  12: 'על אהבה ועל שוקולד – סדנה לט״ו באב',
  13: 'היציאה מהסופר – על הבריחה ועל הבחירה',
  14: 'מים מים בששון – חיבור מחודש למים בבית ובגוף',
  15: 'שינוי ומשחת השיניים – מכינות משחת שיניים',
  16: 'הסבון בכה מאוד – מה זה סבון ולמה הוא בוכה',
  17: 'סוד התבשיל הפשוט – המזון המיטיב',
  18: 'הכול על הצום – סדנה לקראת חגי הסתיו',
};

const getTitle = (tabKey: TabKey) => data[tabKey].title;
const getEvents = (tabKey: TabKey) =>
  Object.entries(events[tabKey].eventDates).map(([index, date]) => ({
    index: Number(index),
    title: eventNames[index],
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
  const [tabKey, setTabKey] = useState<TabKey>('usefulness');

  useEffect(() => {
    setTabKey(getDefaultTabKey());
  }, []);

  const renderNextLink = () => {
    const nextKey = tabKey === 'usefulness' ? 'movement' : 'satisfaction';
    return (
      <Next onClick={() => setTabKey(nextKey)} $hidden={tabKey === 'satisfaction'}>
        <Prefix>לזמן הבא:</Prefix> {getTitle(nextKey)}
      </Next>
    );
  };

  const renderPreviousLink = () => {
    const prevKey = tabKey === 'satisfaction' ? 'movement' : 'usefulness';
    return (
      <Prev onClick={() => setTabKey(prevKey)} $hidden={tabKey === 'usefulness'}>
        <Prefix>לזמן הקודם:</Prefix> {getTitle(prevKey)}
      </Prev>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Title>תכניית סדנאות ״השיבה הביתה״ - קיץ 2021</Title>
        <Subtitle>18 סדנאות ילוו אותנו לאורך שלושה זמנים בהתאמה לגלגל השנה של עץבעיר</Subtitle>

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
                  season={data[key].season}
                  element={data[key].element}
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

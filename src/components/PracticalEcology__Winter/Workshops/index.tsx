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

const tabKeys = ['prosperity', 'agriculture', 'cultivation'] as const;
export type TabKey = (typeof tabKeys)[number];

const data: Record<TabKey, { title: string; season: string; element: string }> = {
  prosperity: {
    title: 'שגשגנות',
    element: 'אדמה',
    season: 'סתיו',
  },
  agriculture: {
    title: 'חקלאות',
    element: 'אדמה',
    season: 'חורף',
  },
  cultivation: {
    title: 'הזנה',
    element: 'אוויר',
    season: 'חורף',
  },
};

const eventNames: Record<string, string> = {
  1: 'קומפוסט והעיר הגדולה – מבוא',
  2: 'איך להיות חולה - שיקויי מרפא ועוד',
  3: 'ארוחת הצהריים החורפית - איך מכינות צהריים בעץ',
  4: 'חומץ והחיים בסתיו - איך עושות חומץ',
  5: 'אש המרד - הכנת נרות אקולוגיים, סדנה לחנוכה',
  6: "קמבוצ'ה והחיידקים - איך מכינות קמבוצ'ה",
  7: 'צמחים מועילים בחורף בעיר - כובע נזיר, אפונה וברוקולי',
  8: 'קומפוסט והעיר הגדולה – בוקאשי',
  9: 'טקס התה המקומי - תה מהגינה בעיר',
  10: 'שירת העשבים - ליקוט ומיצוי חלמתיים, סירפדיים ומרורים',
  11: 'עצים לאור ירח - סדנה לט״ו בשבט, אלון ותמי',
  12: 'הפרידה מהנייר החד פעמי',
  13: 'תסססס... סדנת תרסיסים',
  14: 'מה את עושה כשאת קמה בבוקר',
  15: 'השיער המבריק - הזנה אמתית לשיער',
  16: 'מתוק לי מתוק לי - סדנת תופינים לפורים',
  17: 'סוף עונת התפוזים - מה עושות עם כל הקליפות',
  18: 'ידידות עם החמה - הכנת חמאת הגנה מהחמה',
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
  const [tabKey, setTabKey] = useState<TabKey>('prosperity');

  useEffect(() => {
    setTabKey(getDefaultTabKey());
  }, []);

  const renderNextLink = () => {
    const nextKey = tabKey === 'prosperity' ? 'agriculture' : 'cultivation';
    return (
      <Next onClick={() => setTabKey(nextKey)} $hidden={tabKey === 'cultivation'}>
        <Prefix>לזמן הבא:</Prefix> {getTitle(nextKey)}
      </Next>
    );
  };

  const renderPreviousLink = () => {
    const prevKey = tabKey === 'cultivation' ? 'agriculture' : 'prosperity';
    return (
      <Prev onClick={() => setTabKey(prevKey)} $hidden={tabKey === 'prosperity'}>
        <Prefix>לזמן הקודם:</Prefix> {getTitle(prevKey)}
      </Prev>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Title>רשימת סדנאות החורף לבחירתכן</Title>
        <Subtitle>18 סדנאות ליוו אותנו לאורך שלושה זמנים בהתאמה לגלגל השנה של עץבעיר:</Subtitle>

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

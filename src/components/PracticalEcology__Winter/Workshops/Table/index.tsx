import React, { FC } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import { Wrapper, Title, Subtitle, Table, Row, Idx, Name } from './styles';

interface IProps {
  tabKey: 'prosperity' | 'agriculture' | 'cultivation';
  title: string;
  dates: [string, string];
  element: string;
  season: string;
  events: IEvent[];
}

interface IEvent {
  index: number;
  title: string;
  date: string;
}

const Component: FC<IProps> = ({ tabKey, title, dates, element, season, events }) => (
  <Wrapper>
    <Title>סדנאות זמן {title}</Title>
    <Subtitle>
      תאריכים:
      {format(new Date(dates[0]), 'dd MMMM', { locale: he })} -{' '}
      {format(new Date(dates[1]), 'dd MMMM', { locale: he })} | עונה: {season} | יסוד: {element}
    </Subtitle>
    <Table tabKey={tabKey}>
      {events.map((event) => (
        <Row key={event.index} data-time={new Date(event.date).getTime()} tabKey={tabKey}>
          <Idx>{event.index}</Idx>
          <Name tabKey={tabKey}>{event.title}</Name>
        </Row>
      ))}
    </Table>
  </Wrapper>
);

export default Component;

import React, { FC, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import { Wrapper, Title, Subtitle, Table, Row, Idx, Name, DateWrapper } from './styles';

const now = Date.now();

interface IProps {
  tabKey: 'usefulness' | 'movement' | 'satisfaction';
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

const Component: FC<IProps> = ({ tabKey, title, dates, element, season, events }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // add [data-past] attribute (must not be prerendered)
    ref.current.querySelectorAll(`${Row}`).forEach((row) => {
      const time = Number(row.getAttribute('data-time'));
      const isPast = now - time > 0;
      row.setAttribute('data-past', isPast.toString());
    });
  }, []);

  return (
    <Wrapper>
      <Title>סדנאות זמן {title}</Title>
      <Subtitle>
        תאריכים: {format(new Date(dates[0]), 'dd MMMM', { locale: he })} -{' '}
        {format(new Date(dates[1]), 'dd MMMM', { locale: he })} | עונה: {season} | יסוד: {element}
      </Subtitle>
      <Table ref={ref} tabKey={tabKey}>
        {events.map((event) => (
          <Row key={event.index} data-time={new Date(event.date).getTime()} tabKey={tabKey}>
            <Idx>{event.index}</Idx>
            <Name tabKey={tabKey}>{event.title}</Name>
            <DateWrapper>{format(new Date(event.date), 'dd.MM.yy', { locale: he })}</DateWrapper>
          </Row>
        ))}
      </Table>
    </Wrapper>
  );
};

export default Component;

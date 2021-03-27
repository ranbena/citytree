import React, { FC, useEffect, useRef } from 'react';
import { FormattedMessage, FormattedDate } from 'gatsby-plugin-intl';
import { Wrapper, Title, Subtitle, Table, Row, Idx, Name, DateWrapper } from './styles';

const now = Date.now();

interface IProps {
  title: JSX.Element;
  dates: [string, string];
  element: string;
  events: IEvent[];
}

interface IEvent {
  index: number;
  title: JSX.Element;
  date: string;
}

const Component: FC<IProps> = ({ title, dates, element, events }) => {
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
      <Title>
        <FormattedMessage id="practical-ecology-summer.workshops.timeof" /> {title}
      </Title>
      <Subtitle>
        <strong>
          <FormattedMessage id="dates" />:
        </strong>{' '}
        <FormattedDate value={dates[0]} month="long" day="numeric" /> -{' '}
        <FormattedDate value={dates[1]} month="long" day="numeric" /> |{' '}
        <strong>
          <FormattedMessage id="element" />:
        </strong>{' '}
        {element}
      </Subtitle>
      <Table ref={ref}>
        {events.map((event) => (
          <Row key={event.index} data-time={new Date(event.date).getTime()}>
            <Idx>{event.index}</Idx>
            <Name>{event.title}</Name>
            <DateWrapper>
              <FormattedDate value={event.date} year="2-digit" month="2-digit" day="2-digit" />
            </DateWrapper>
          </Row>
        ))}
      </Table>
    </Wrapper>
  );
};

export default Component;

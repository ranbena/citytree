import React, { FC } from 'react';
import { FormattedMessage, FormattedDate } from 'gatsby-plugin-intl';
import { Wrapper, Title, Subtitle, Table, Row, Idx, Name } from './styles';

interface IProps {
  tabKey: 'prosperity' | 'agriculture' | 'cultivation';
  title: JSX.Element;
  dates: [string, string];
  element: string;
  season: string;
  events: IEvent[];
}

interface IEvent {
  index: number;
  title: JSX.Element;
  date: string;
}

const Component: FC<IProps> = ({ tabKey, title, dates, element, season, events }) => (
  <Wrapper>
    <Title>
      <FormattedMessage id="practical-ecology-summer.workshops.timeof" /> {title}
    </Title>
    <Subtitle>
      <FormattedMessage id="dates" />:
      <FormattedDate value={dates[0]} month="long" day="numeric" /> -{' '}
      <FormattedDate value={dates[1]} month="long" day="numeric" /> |{' '}
      <FormattedMessage id="season" />: {season} | <FormattedMessage id="element" />: {element}
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

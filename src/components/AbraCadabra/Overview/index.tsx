import React, { FC } from 'react';
import EnrollNowButton from '../EnrollNowButton';

import { Title, Box } from '../styles';
import { Wrapper, Container } from './styles';

const Overview: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} lg={8} md={10} sm={12}>
        <Title>OVERVIEW</Title>
        <p>
          Answering the cry for a bit of magic amidst the widely-felt pain of our deeply wounded
          world, CityTree is offering an 8-week online course that will teach you the foundations
          you need to bring out the natural healer inside of you.
        </p>
        <p>
          We'll be exploring old-time magic for our modern lives by means of returning to the
          sacredness of our creative, productive, ecological selves and our innate sense of harmony
          with nature.
        </p>
        <hr />
        <h4>COURSE DATES</h4>
        <p>
          January 20-March 10 (Every Wednesday)
          <br />
          19:00-20:15 IST (12:00pm-1:15pm EST)
        </p>
        <h4>LANGUAGE</h4>
        <p>English</p>
        <EnrollNowButton />
      </Box>
    </Container>
  </Wrapper>
);

export default Overview;

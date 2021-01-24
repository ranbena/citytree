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
          Answering the cry for a bit of magic in a wounded world, CityTree is offering an 8-week
          online course that will teach the foundations you need to bring out the natural healer
          inside of you.
        </p>
        <p>
          We’ll be exploring old-time magic for our modern lives, reconnecting to the sacred
          elements, our innate sense of harmony with nature, and the wisdom held deep within our own
          bodies.
        </p>
        <hr />
        <h4>COURSE DATES</h4>
        <p>
          February 3-March 24 (Every Wednesday)
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

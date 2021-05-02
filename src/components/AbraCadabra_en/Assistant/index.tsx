import React, { FC } from 'react';

import { Title, Box } from '../styles';
import { Wrapper, Container } from './styles';

const Assistant: FC = () => (
  <Wrapper>
    <Container>
      <Box lg={10} md={12}>
        <Title>ASSISTING FACILITATOR</Title>
        <p>
          Liana Berlin-Fischler is a systems-minded designer inspired by Earth’s innate creativity
          and the conscious experience.
        </p>
        <p>
          She joins CityTree in a wide-range of capacities and is excited to engage participants
          further as both a co-creator and community manager for the course.
        </p>
      </Box>
    </Container>
  </Wrapper>
);

export default Assistant;

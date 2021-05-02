import React, { FC } from 'react';

import { Title, Box } from '../styles';
import { Wrapper, Container } from './styles';

const Instructor: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} lg={8} md={10} sm={12}>
        <Title>INSTRUCTOR</Title>
        <p>
          Tami Zori is the founder of CityTree, Tel Aviv’s first center and home for urban ecology.
          As a Bezalel graduate and fellow of the Heschel Center for Sustainability, she works to
          discover new ways to cope with climate crisis through education, research, and art--all
          with a bit of magic.
        </p>
        <p>
          Tami’s ecological teachings and explorations are radically rooted in the intention to
          restore balance in the world. Her work honors ancient wisdom and nurtures the pursuit to
          more fully embody the feminine in our everyday lives. Tami walks the path of the New Woman
          as a healer, bridging the illusory gap between humans and the natural world.
        </p>
      </Box>
    </Container>
  </Wrapper>
);

export default Instructor;

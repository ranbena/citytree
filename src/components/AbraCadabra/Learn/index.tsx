import React, { FC } from 'react';
import EnrollNowButton from '../EnrollNowButton';

import { Title, Box } from '../styles';
import { Wrapper, Container, List } from './styles';

const Learn: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} lg={8} md={10} sm={12}>
        <Title>WHAT YOU’LL LEARN</Title>
        <p>
          Each week we will greet a different part of the body and the lessons that lie there, as
          well as learn tricks and recipes to get your witchy-self (and shelf!) started on the path
          towards deep healing.
        </p>
        <List>
          <li>A new (old) story of the Woman and witchcraft</li>
          <li>How to come back into relationship with our bodies and the wisdom they hold</li>
          <li>What it means to return to the Feminine through principles of deep ecology</li>
          <li>Practical magical recipes to heal our bodies, homes, and communities</li>
          <li>Words from the Hebrew language and its divine teachings... and so much more</li>
        </List>
        <EnrollNowButton />
      </Box>
    </Container>
  </Wrapper>
);

export default Learn;

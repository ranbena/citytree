import React, { FC } from 'react';

import { Title, Box, Button } from '../styles';
import { Wrapper, Container, List } from './styles';

const Learn: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} lg={8} md={10} sm={12}>
        <Title>WHAT YOU’LL LEARN</Title>
        <p>
          Each lesson will be centered around a word in the Hebrew language and the foundational
          codes embedded in its construction. It is through these words and their ancient teachings
          that we will rediscover our sacred connection to the elements, uniting spirit and matter
          with a radical focus on the Feminine as an embodied source of magic.
        </p>
        <List>
          <li>A new (old) story of the Woman and witchcraft</li>
          <li>How to come back into relationship with the physical world and its living wisdom</li>
          <li>What it means to return to the Feminine through principles of deep ecology</li>
          <li>
            Practical applications and explorations to help heal ourselves, our communities and our
            planet
          </li>
          <li>Words from the Hebrew language and their divine teachings… and so much more!</li>
        </List>
        <Button
          as="a"
          href="https://docs.google.com/document/d/1Yxwnwa4uGoTssDjfV6yaXt6rrOM38owVn9u9HiyANPQ/preview"
          target="_blank"
        >
          View Syllabus
        </Button>
      </Box>
    </Container>
  </Wrapper>
);

export default Learn;

import React, { FC } from 'react';

import { Container } from 'react-bootstrap';
import { Wrapper, Title, SubTitle } from './styles';

const TopSection: FC = () => (
  <Wrapper $locale="he">
    <Container>
      <Title>סדרת סדנאות החורף של השיבה הביתה</Title>
      <SubTitle>18 שיעורי זום מוקלטים באקולוגיה מעשית, חורף 2020-21</SubTitle>
    </Container>
  </Wrapper>
);

export default TopSection;

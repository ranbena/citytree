import React, { FC } from 'react';

import { Container } from 'react-bootstrap';
import { Wrapper, Title, SubTitle } from './styles';

const TopSection: FC = () => (
  <Wrapper $locale="he">
    <Container>
      <Title>סדרת סדנאות השיבה הביתה</Title>
      <SubTitle>18 שיעורי זום באקולוגיה מעשית, קיץ 2021</SubTitle>
    </Container>
  </Wrapper>
);

export default TopSection;

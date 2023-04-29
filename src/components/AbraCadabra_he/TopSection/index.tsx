import React, { FC } from 'react';

import { Container } from 'react-bootstrap';
import { Wrapper, Title, SubTitle } from './styles';

const TopSection: FC = () => (
  <Wrapper $locale="he">
    <Container>
      <Title>
        <strong>הִנְּנִי</strong>
        <span>קורס כישוף, אקולוגיה עמוקה ושובה של האלה</span>
      </Title>
      <SubTitle>8 מפגשי זום ועוד מתנות</SubTitle>
    </Container>
  </Wrapper>
);

export default TopSection;

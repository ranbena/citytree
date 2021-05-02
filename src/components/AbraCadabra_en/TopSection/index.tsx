import React, { FC } from 'react';

import leftBG from 'src/assets/images/abracadabra-en/bg-cotton-1.jpg';
import rightBG from 'src/assets/images/abracadabra-en/bg-cotton-2.jpg';

import {
  Wrapper,
  Background,
  Container,
  Title,
  HebrewTitle,
  Colon,
  EnglishTitle,
  SubTitle,
} from './styles';

const TopSection: FC = () => (
  <Wrapper>
    <Background>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={rightBG} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={leftBG} />
    </Background>
    <Container>
      <Title>
        <EnglishTitle>ABRACADABRA</EnglishTitle>
        <Colon>:</Colon>
        <HebrewTitle>אברא כדברא</HebrewTitle>
      </Title>
      <SubTitle>
        An 8-week course with CityTree on magic, deep ecology, and the rise of the feminine
      </SubTitle>
    </Container>
  </Wrapper>
);

export default TopSection;

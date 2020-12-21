import React, { FC } from 'react';
import EnrollNowButton from '../EnrollNowButton';
import { Title } from '../styles';
import { Wrapper, Container, Tiers, Tier, Title as TierTitle, Price, Nis, Note } from './styles';

const Investment: FC = () => (
  <Wrapper>
    <Container>
      <Title bullets>COURSE INVESTMENT TIERS</Title>
      <p>
        The course will be offered at three different investment tiers to make this knowledge as
        accessible as possible for as many as possible, while still respecting the effort and time
        that goes into making this happen. We invite you to mindfully consider what tier is
        appropriate for you at this point.
      </p>
      <Tiers>
        <Tier $name="solidarity">
          <TierTitle>Solidarity</TierTitle>
          <Price>
            $65<Nis>or 230 nis</Nis>
          </Price>
        </Tier>
        <Tier $name="regular">
          <TierTitle>Regular Tuition</TierTitle>
          <Price>
            $125<Nis>or 430 nis</Nis>
          </Price>
        </Tier>
        <Tier $name="pay">
          <TierTitle>Pay It Forward</TierTitle>
          <Price>
            $175<Nis>or 600 nis</Nis>
          </Price>
        </Tier>
        <Tier $name="patrons">
          <TierTitle>For CityTree Patrons*</TierTitle>
          <Price>
            $22<Nis>or 80 nis</Nis>
          </Price>
        </Tier>
      </Tiers>
      <Note>*Open to CityTree supporters on Patreon contributing $18+ a month</Note>
      <EnrollNowButton />
    </Container>
  </Wrapper>
);

export default Investment;

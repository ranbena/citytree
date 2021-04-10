import React, { FC } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { Title } from '../styles';
import { Wrapper, Container, Tiers, Tier, Title as TierTitle, Price } from './styles';

const Investment: FC = () => (
  <Wrapper>
    <Container>
      <Title>
        <FormattedMessage id="practical-ecology-summer.investment.title" />
      </Title>
      <p>
        <FormattedMessage id="practical-ecology-summer.investment.subtitle" />
      </p>
      <Tiers>
        <Tier>
          <TierTitle>
            <FormattedMessage id="practical-ecology-summer.investment.tiers.single" />
          </TierTitle>
          <Price>
            20 <FormattedMessage id="nis" />
          </Price>
        </Tier>
        <Tier>
          <TierTitle>
            <FormattedMessage id="practical-ecology-summer.investment.tiers.standard" />
          </TierTitle>
          <Price>
            250 <FormattedMessage id="nis" />
          </Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>
              <FormattedMessage id="practical-ecology-summer.investment.tiers.patrons.0" />
            </strong>
            <div>
              * <FormattedMessage id="practical-ecology-summer.investment.tiers.patrons.1" />
            </div>
          </TierTitle>
          <Price>
            150 <FormattedMessage id="nis" />
          </Price>
        </Tier>
      </Tiers>
      <SignUpButton>
        <FormattedMessage id="practical-ecology-summer.investment.button" />
      </SignUpButton>
    </Container>
  </Wrapper>
);

export default Investment;

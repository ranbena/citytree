import React, { FC } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { Wrapper, Container, Tiers, Tier, Title, TierTitle, Price } from './styles';

const Investment: FC = () => (
  <Wrapper>
    <Container>
      <Title>
        <FormattedMessage id="practical-ecology-winter.investment.title" />
      </Title>
      <p>
        <FormattedMessage id="practical-ecology-winter.investment.subtitle" />
      </p>
      <Tiers>
        <Tier>
          <TierTitle>
            <FormattedMessage id="practical-ecology-winter.investment.tiers.single" />
          </TierTitle>
          <Price>
            20 <FormattedMessage id="nis" />
          </Price>
        </Tier>
        <Tier>
          <TierTitle>
            <FormattedMessage id="practical-ecology-winter.investment.tiers.standard" />
          </TierTitle>
          <Price>
            150 <FormattedMessage id="nis" />
          </Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>
              <FormattedMessage id="practical-ecology-winter.investment.tiers.patrons.0" />
            </strong>
            <div>
              * <FormattedMessage id="practical-ecology-winter.investment.tiers.patrons.1" />
            </div>
          </TierTitle>
          <Price>
            100 <FormattedMessage id="nis" />
          </Price>
        </Tier>
      </Tiers>
      <SignUpButton>
        <FormattedMessage id="practical-ecology-winter.investment.button" />
      </SignUpButton>
    </Container>
  </Wrapper>
);

export default Investment;

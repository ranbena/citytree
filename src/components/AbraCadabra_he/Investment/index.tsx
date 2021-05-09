import React, { FC } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { Wrapper, Container, Tiers, Tier, TierTitle, Price, Title } from './styles';

const Investment: FC = () => (
  <Wrapper>
    <Container>
      <Title>
        <FormattedMessage id="abracadabra-he.investment.title" />
      </Title>
      <Tiers>
        <Tier>
          <TierTitle>
            <strong>
              <FormattedMessage id="abracadabra-he.investment.tiers.contribute.0" />
            </strong>
            <div>
              * <FormattedMessage id="abracadabra-he.investment.tiers.contribute.1" />
            </div>
          </TierTitle>
          <Price>
            480 <FormattedMessage id="nis" />
          </Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>
              <FormattedMessage id="abracadabra-he.investment.tiers.standard.0" />
            </strong>
            <div>
              * <FormattedMessage id="abracadabra-he.investment.tiers.standard.1" />
            </div>
          </TierTitle>
          <Price>
            380 <FormattedMessage id="nis" />
          </Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>
              <FormattedMessage id="abracadabra-he.investment.tiers.patrons.0" />
            </strong>
            <div>
              * <FormattedMessage id="abracadabra-he.investment.tiers.patrons.1" />
            </div>
          </TierTitle>
          <Price>
            180 <FormattedMessage id="nis" />
          </Price>
        </Tier>
      </Tiers>
      <SignUpButton />
    </Container>
  </Wrapper>
);

export default Investment;

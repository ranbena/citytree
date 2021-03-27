import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { forEachMessage } from '../../../utils';

import { Title, SubTitle } from '../styles';
import { Wrapper, Container, Box } from './styles';

const Overview: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <Box xl={7} lg={8} md={10} sm={12}>
          <Title>
            <FormattedMessage id="practical-ecology-winter.nav.overview" />
          </Title>
          <SubTitle>
            <FormattedMessage id="practical-ecology-winter.overview.subtitle" />
          </SubTitle>
          {forEachMessage(intl, 'practical-ecology-winter.overview.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
          <hr />
          <p>
            <FormattedMessage id="practical-ecology-winter.overview.date" />
            <br />
            <FormattedMessage id="practical-ecology-winter.overview.time" />
          </p>
          <p>
            <FormattedMessage id="language" />: <FormattedMessage id="hebrew" />
          </p>
          <SignUpButton>
            <FormattedMessage id="practical-ecology-winter.signupnow" />
          </SignUpButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Overview;

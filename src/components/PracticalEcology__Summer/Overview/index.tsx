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
        <Box xl={8} lg={8} md={10} sm={12}>
          <Title>
            <FormattedMessage id="practical-ecology-summer.nav.overview" />
          </Title>
          <SubTitle>
            <FormattedMessage id="practical-ecology-summer.overview.subtitle" />
          </SubTitle>
          {forEachMessage(intl, 'practical-ecology-summer.overview.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
          <hr />
          <p>
            <FormattedMessage id="practical-ecology-summer.overview.date" />
            <br />
            <br />
            <FormattedMessage id="practical-ecology-summer.overview.time" />
          </p>
          <p>
            <FormattedMessage id="language" />: <FormattedMessage id="hebrew" />
          </p>
          <SignUpButton>
            <FormattedMessage id="practical-ecology-summer.signupnow" />
          </SignUpButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Overview;

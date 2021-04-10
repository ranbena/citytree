import React, { FC } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';

import { Wrapper, Container, Title, Box } from './styles';

const Overview: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} lg={8} md={10} sm={12} transparent>
        <Title>
          <FormattedMessage id="practical-ecology-summer.times.title" />
        </Title>
        <p>
          <FormattedMessage id="practical-ecology-summer.times.text" />
        </p>
        <br /><br />
        <SignUpButton>
          <FormattedMessage id="practical-ecology-summer.times.button" />
        </SignUpButton>
      </Box>
    </Container>
  </Wrapper>
);

export default Overview;

import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { forEachMessage } from 'src/utils';
import SignUpButton from '../SignUpButton';

import { Wrapper, Container, Title, Box } from './styles';

const Overview: FC = () => {
  const intl = useIntl();
  return (
    <Wrapper>
      <Container>
        <Box xl={10} sm={12} transparent>
          <Title>
            <FormattedMessage id="practical-ecology-summer.times.title" />
          </Title>
          <p>
            {forEachMessage(intl, 'practical-ecology-summer.times.text').map(([txt, key]) => (
              <p key={key}>{txt}</p>
            ))}
          </p>
        </Box>

        <SignUpButton>
          <FormattedMessage id="practical-ecology-summer.times.button" />
        </SignUpButton>
      </Container>
    </Wrapper>
  );
};

export default Overview;

import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { forEachMessage } from '../../../utils';

import { Title } from '../styles';
import { Wrapper, Container, Box } from './styles';

const Overview: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <Box xl={7} md={10} sm={12}>
          <Title>
            <FormattedMessage id="practical-ecology-summer.overview.title" />
          </Title>
          {forEachMessage(intl, 'practical-ecology-summer.overview.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
          <p>
            <strong>
              <FormattedMessage id="practical-ecology-summer.overview.date" />
            </strong>
          </p>
          <p>
            {forEachMessage(intl, 'practical-ecology-summer.overview.bottomText').map(
              ([txt, key]) => (
                <p key={key}>{txt}</p>
              ),
            )}
          </p>
          <br />
          <SignUpButton>
            <FormattedMessage id="practical-ecology-summer.signupnow" />
          </SignUpButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Overview;

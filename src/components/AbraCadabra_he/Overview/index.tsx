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
            <FormattedMessage id="abracadabra-he.overview.title" />
          </Title>
          {forEachMessage(intl, 'abracadabra-he.overview.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
          <p>
            <strong>
              <FormattedMessage id="abracadabra-he.overview.date" />
            </strong>
          </p>
          <div>
            {forEachMessage(intl, 'abracadabra-he.overview.bottomText').map(([txt, key]) => (
              <p key={key}>{txt}</p>
            ))}
          </div>
          <br />
          <SignUpButton />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Overview;

import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { forEachMessage } from '../../../utils';

import { Title } from '../styles';
import { Wrapper, Container, Box, BottomPart } from './styles';

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
          <BottomPart>
            <p>
              <strong>
                <FormattedMessage id="abracadabra-he.overview.date" />
              </strong>
            </p>
            <p>
              <FormattedMessage id="abracadabra-he.overview.bottomText" />
            </p>
          </BottomPart>
          <SignUpButton />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Overview;

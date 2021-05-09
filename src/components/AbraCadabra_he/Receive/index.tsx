import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { forEachMessage } from '../../../utils';

import { Wrapper, Container, Box, BoxContainer, Title } from './styles';
import SignUpButton from '../SignUpButton';

const Receive: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <BoxContainer>
          <Box green>
            <Title>
              <FormattedMessage id="abracadabra-he.receive.box1.title" />
            </Title>
            <ul>
              {forEachMessage(intl, 'abracadabra-he.receive.box1.text').map(([txt, key]) => (
                <li key={key}>{txt}</li>
              ))}
            </ul>
          </Box>
          <Box>
            <Title>
              <FormattedMessage id="abracadabra-he.receive.box2.title1" />
            </Title>
            {forEachMessage(intl, 'abracadabra-he.receive.box2.text1').map(([txt, key]) => (
              <p key={key}>{txt}</p>
            ))}
            <Title>
              <FormattedMessage id="abracadabra-he.receive.box2.title2" />
            </Title>
            {forEachMessage(intl, 'abracadabra-he.receive.box2.text2').map(([txt, key]) => (
              <p key={key}>{txt}</p>
            ))}
            <br />
            <SignUpButton />
          </Box>
        </BoxContainer>
        <Box xl={12}>
          <Title>
            <FormattedMessage id="abracadabra-he.receive.box3.title" />
          </Title>
          {forEachMessage(intl, 'abracadabra-he.receive.box3.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Receive;

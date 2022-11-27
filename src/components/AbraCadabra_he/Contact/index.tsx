import React, { FC } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { emailLink, homePhoneLink, whatsappGroupInviteLink, whatsappLink } from 'src/constants';
import { Wrapper, Title } from './styles';
import SignUpButton from '../SignUpButton';

const Contact: FC = () => (
  <Wrapper>
    <Title>
      <FormattedMessage id="abracadabra-he.contact.title" />
    </Title>
    <p>
      {emailLink} | {homePhoneLink}
    </p>
    <p>
      <FormattedMessage id="abracadabra-he.contact.whatsapp" /> {whatsappLink}
    </p>
    <SignUpButton url={whatsappGroupInviteLink}>
      <FormattedMessage id="abracadabra-he.contact.button" />
    </SignUpButton>
  </Wrapper>
);

export default Contact;

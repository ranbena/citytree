import React, { FC } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { emailLink, tamiPhoneLink, whatsappGroupInviteLink, whatsappLink } from 'src/constants';
import { Wrapper, Title } from './styles';
import SignUpButton from '../SignUpButton';

const Contact: FC = () => (
  <Wrapper>
    <Title>
      <FormattedMessage id="abracadabra-he.contact.title" />
    </Title>
    <p>
      {emailLink} | {tamiPhoneLink}
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

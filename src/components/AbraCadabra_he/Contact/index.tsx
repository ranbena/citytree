import React, { FC } from 'react';
import { emailLink, tamiPhoneLink, whatsappGroupInviteLink, whatsappLink } from 'src/constants';
import { Wrapper, Title } from './styles';
import SignUpButton from '../SignUpButton';

const Contact: FC = () => (
  <Wrapper>
    <Title>שאלות? בקשות? צרו איתנו קשר!</Title>
    <p>
      {emailLink} | {tamiPhoneLink}
    </p>
    <p>בווטסאפ, עינת: {whatsappLink}</p>
    <SignUpButton url={whatsappGroupInviteLink}>הצטרפו לקבוצת הווטסאפ של העץ...</SignUpButton>
  </Wrapper>
);

export default Contact;

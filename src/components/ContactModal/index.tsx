import React, { FC } from 'react';
import { emailLink, phoneLink } from '@/constants';
import {
  Title,
  SubTitle,
  List,
  EmailItem,
  PhoneItem,
  FacebookItem,
  ItemTitle,
  StyledModal,
} from './styles';

interface IProps {
  show: boolean;
  hide: () => void;
}

const Modal: FC<IProps> = ({ show, hide }) => (
  <StyledModal show={show} onHide={hide}>
    <StyledModal.Body>
      <Title>Get in touch with CityTree</Title>
      <SubTitle>
        Just give us a call or send us a message and we’ll get back to you shortly.
      </SubTitle>
      <List>
        <EmailItem>
          <ItemTitle>EMAIL</ItemTitle>
          {emailLink}
        </EmailItem>
        <PhoneItem>
          <ItemTitle>PHONE</ItemTitle>
          {phoneLink}
        </PhoneItem>
        <FacebookItem>
          <ItemTitle>FACEBOOK</ItemTitle>
          <a href="https://facebook.com/citytree">עץבעיר CityTree شجرة بالمدينة</a>
        </FacebookItem>
      </List>
    </StyledModal.Body>
  </StyledModal>
);

export default Modal;

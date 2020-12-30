import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import bgImage from 'src/assets/images/contact-modal.jpg';

export const StyledModal = styled(Modal)`
  .modal-dialog {
    width: 100%;
    max-width: min(1630px, 90vw);
  }

  .modal-content {
    border-radius: 9px;
    border-width: 0;
    overflow: hidden;
  }

  .modal-body {
    background: url(${bgImage}) no-repeat right top;
    background-size: contain;
    padding: 77px;
    padding-right: 40%; // to avoid the bg image

    &,
    & a {
      color: #386b7e;
    }

    @media (max-width: 950px) {
      background-image: none;
      padding-right: 77px;
    }
  }
`;

export const Title = styled.h3`
  color: #135049;
  font-size: 39px;
  line-height: 50px;
  font-family: Proza Libre;
  margin: 0;

  @media (max-width: 1110px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h5`
  font-size: 30px;
  font-weight: 300;
  margin: 0;

  @media (max-width: 1110px) {
    font-size: 20px;
  }
`;

export const List = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: inline-block;
  white-space: nowrap;
`;

export const EmailItem = styled(Item)``;

export const PhoneItem = styled(Item)``;

export const FacebookItem = styled(Item)``;

export const ItemTitle = styled.div``;

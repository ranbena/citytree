import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 640px;
  }

  .modal-content {
    border-radius: 9px;
    border-width: 0;
    background: #dde5c7;
    overflow: hidden;
  }

  .modal-body {
    padding: 30px;
  }

  a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Top = styled.div``;

export const Title = styled.h3`
  font-size: 27px;
  font-weight: 600;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 23px;
  margin: 11px 0 0;
`;

export const Contact = styled.div`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  margin: 20px 0 0;
`;

export const Developer = styled.div`
  background-color: #334110b3;
  color: #dce5c7;
  padding: 20px 30px 10px;
  margin: 37px -30px -31px;
  position: relative;

  /* &:before {
    content: '......................................................................................................';
    letter-spacing: 4px;
    margin: 10px 0 10px;
    display: inline-block;
    word-break: break-word;
    max-width: 100%;
    overflow: hidden;
    height: 25px;
  } */

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -2px;
    height: 0px;
    border-top: 5px dotted #667149;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;

    a {
      color: #dde5c7;
    }
  }
`;

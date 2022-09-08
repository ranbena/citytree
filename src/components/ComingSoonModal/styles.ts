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
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  margin: 5px 0 0;
`;

export const Contact = styled.div`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin: 15px 0 0;
`;

export const Developer = styled.div`
  font-size: 20px;
  font-weight: 300;

  &:before {
    content: '......................................................................................................';
    letter-spacing: 4px;
    margin: 10px 0 10px;
    display: inline-block;
    word-break: break-word;
    max-width: 100%;
    overflow: hidden;
    height: 25px;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
  }
`;

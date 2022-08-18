import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-dialog {
    /* width: 600px; */
    text-align: center;
  }

  .modal-content {
    border-radius: 9px;
    border-width: 0;
  }

  .modal-body {
    padding: 30px;

    &,
    & a {
      color: #386b7e;
    }
  }
`;

export const Title = styled.h3`
  color: #135049;
  font-size: 39px;
  line-height: 50px;
  font-family: Proza Libre;
  margin: 0;
`;

export const SubTitle = styled.h5`
  font-size: 30px;
  font-weight: 300;
  margin: 0;
`;

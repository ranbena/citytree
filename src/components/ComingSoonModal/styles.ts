import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 9px;
    border-width: 0;
    background: #fefcf1;
  }

  .modal-body {
    padding: 30px;

    &,
    & a {
      color: #386b7e;
    }
  }
`;

export const Top = styled.div`
  display: flex;

  img {
    height: 185px;
    margin-top: -30px;
    margin-inline-end: -11px;
    position: relative;
    z-index: 0;
  }
`;

export const Text = styled.div`
  margin-inline-end: -30px;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h3`
  color: #135049;
  font-size: 27px;
  font-family: Proza Libre;
  margin: 0;
`;

export const SubTitle = styled.h5`
  font-size: 27px;
  font-weight: 300;
  margin: 5px 0 0;
`;

export const Developer = styled.h5`
  font-size: 20px;
  font-weight: 300;
  margin: 20px 0 0;
  padding-top: 20px;
  border-top: 1px dashed rgb(182 199 198);

  a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

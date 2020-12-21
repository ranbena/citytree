import React, { FC, PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

import { Wrapper } from './styles';

export { Anchor } from './styles';

interface IProps {
  color: string;
}

const Navigation: FC<PropsWithChildren<IProps>> = ({ color, children }) => (
  <Wrapper color={color}>
    <Container>{children}</Container>
  </Wrapper>
);

export default Navigation;

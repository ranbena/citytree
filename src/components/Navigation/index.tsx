import React, { FC, PropsWithChildren } from 'react';

import { Wrapper, Container } from './styles';

export { Anchor } from './styles';

interface IProps {
  color: string;
  navHeight: number;
  bgImage?: string;
  gap?: number;
  fontSize?: number;
}

const Navigation: FC<PropsWithChildren<IProps>> = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Container>{children}</Container>
  </Wrapper>
);

export default Navigation;

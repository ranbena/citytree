import React, { FC, PropsWithChildren } from 'react';
import { Col } from 'react-bootstrap';

import { Wrapper } from './styles';

interface IProps {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  color?: string;
}

export const BoxInner = Wrapper;

const Box: FC<PropsWithChildren<IProps>> = ({ children, color, ...props }) => (
  <Col {...props}>
    <Wrapper color={color}>{children}</Wrapper>
  </Col>
);

export default Box;

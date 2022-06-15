import React, { FC, PropsWithChildren } from 'react';
import { Wrapper } from './styles';

interface IProps {
  image?: string;
  boxColor?: string;
  position?: 'right' | 'left' | 'center';
  anchor?: string;
  className?: string;
}

const Hero: FC<PropsWithChildren<IProps>> = ({
  children,
  image,
  boxColor,
  position = 'center',
  anchor = '',
  className,
}) => (
  <Wrapper
    style={{ backgroundImage: `url(${image})`, backgroundPositionX: position }}
    boxColor={boxColor}
    id={anchor}
    className={className}
  >
    {children}
  </Wrapper>
);

export default Hero;

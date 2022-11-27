import React from 'react';
import cx from 'classnames';
import { useIntl } from 'gatsby-plugin-intl';
import { Col } from 'react-bootstrap';
import { forEachMessage } from 'src/utils';

import { Wrapper, Paragraph as StyledParagraph } from './styles';

interface IProps {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  color?: string;
  transparent?: boolean;
}

export const BoxInner = Wrapper;

export const Box: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  color,
  transparent,
  ...props
}) => (
  <Col {...props}>
    <Wrapper color={color} transparent={transparent}>
      {children}
    </Wrapper>
  </Col>
);

export const Paragraph: React.FC<{
  children?: React.ReactNode;
  intlId?: string;
  weight?: number;
  stretch?: boolean;
  values?: Record<string, any>;
  reverseUnderline?: boolean;
  grow?: boolean;
  className?: string;
}> = ({ intlId, weight, stretch, values, reverseUnderline, grow, className, children }) => {
  const intl = useIntl();

  if (intlId) {
    const values1 = {
      ...values,
      b: (txt: string) => <strong>{txt}</strong>,
      linebreak: <br />,
    };
    const messageArr = forEachMessage(intl, intlId, values1);
    return (
      <>
        {messageArr.map(([txt, key], idx) => (
          <StyledParagraph
            key={key}
            weight={weight}
            stretch={stretch}
            reverseUnderline={reverseUnderline}
            grow={idx === messageArr.length - 1 && grow}
            className={className}
          >
            {txt}
          </StyledParagraph>
        ))}
      </>
    );
  }

  return (
    <StyledParagraph
      weight={weight}
      stretch={stretch}
      reverseUnderline={reverseUnderline}
      grow={grow}
      className={className}
    >
      {children}
    </StyledParagraph>
  );
};

export const FloatBox: React.FC<{
  position: 'top' | 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'left' | 'topLeft' | 'center';
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  staticPosition?: boolean;
  children: React.ReactNode;
}> = ({ position, href, target, onClick, staticPosition = false, children }) => (
  <BoxInner center className={cx('floatBox', position, { clickable: href, staticPosition })}>
    {href && (
      <a href={href} className="float-box-link" onClick={onClick} target={target}>
        {' '}
      </a>
    )}
    {children}
  </BoxInner>
);

export { Title, Button, LinkButton } from './styles';

export default Box;

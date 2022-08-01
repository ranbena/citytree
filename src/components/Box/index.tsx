import React, { FC, PropsWithChildren } from 'react';
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

export const Box: FC<PropsWithChildren<IProps>> = ({ children, color, transparent, ...props }) => (
  <Col {...props}>
    <Wrapper color={color} transparent={transparent}>
      {children}
    </Wrapper>
  </Col>
);

export const Paragraph: FC<{
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
    const values1 = { ...values, b: (txt: string) => <strong>{txt}</strong> };
    return (
      <>
        {forEachMessage(intl, intlId, values1).map(([txt, key]) => (
          <StyledParagraph
            key={key}
            weight={weight}
            stretch={stretch}
            reverseUnderline={reverseUnderline}
            grow={grow}
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

export { Title, Button } from './styles';

export default Box;

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

export const Paragraph: FC<{ children?: React.ReactNode; intlId?: string }> = ({
  intlId,
  children,
}) => {
  const intl = useIntl();

  if (intlId) {
    return (
      <>
        {forEachMessage(intl, intlId, { b: (txt: string) => <strong>{txt}</strong> }).map(
          ([txt, key]) => (
            <StyledParagraph key={key}>{txt}</StyledParagraph>
          ),
        )}
      </>
    );
  }

  return <StyledParagraph>{children}</StyledParagraph>;
};

export { Title } from './styles';

export default Box;

import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeafContainer from 'src/components/LeafContainer';
import { Hero, SessionLink, StyledSessions } from './styles';

interface IProps {
  box: React.ReactNode;
  images: React.ReactNode;
  bgcolor: string;
  reverseLayout?: boolean;
}

const Package: React.FC<React.PropsWithChildren<IProps>> = ({
  box,
  images,
  bgcolor,
  reverseLayout,
}) => (
  <Hero bgColor={bgcolor}>
    <LeafContainer opacity={0.2}>
      <Row style={{ flexDirection: reverseLayout ? 'row-reverse' : 'row' }}>
        <Col lg={6}>{box}</Col>
        <Col lg={6} className="side-column">
          {images}
        </Col>
      </Row>
    </LeafContainer>
  </Hero>
);

export const Sessions: React.FC<{ ids: string[] }> = ({ ids }) => (
  <StyledSessions>
    {ids.map((id, idx) => (
      <>
        {idx !== 0 && ' / '}
        <SessionLink href="">
          <FormattedMessage id={`practical-ecology.sessions.${id}.title`} />
        </SessionLink>
      </>
    ))}
  </StyledSessions>
);

export default Package;

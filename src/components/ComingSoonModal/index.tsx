import React from 'react';
import { Title, SubTitle, StyledModal } from './styles';

export const ComingSoonModalProvider: React.FC<{
  children: (show: (e: React.MouseEvent) => void) => React.ReactNode;
}> = ({ children }) => {
  const [isVisible, setVisibility] = React.useState(false);
  const show = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setVisibility(true);
  }, []);
  const hide = React.useCallback(() => setVisibility(false), []);

  return (
    <>
      <StyledModal show={isVisible} onHide={hide} centered size="md">
        <StyledModal.Body>
          <Title>Coming Soon</Title>
          <SubTitle>
            Just give us a call or send us a message and we’ll get back to you shortly.
          </SubTitle>
        </StyledModal.Body>
      </StyledModal>
      {children(show)}
    </>
  );
};

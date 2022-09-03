import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { githubProject, ranbenaPage } from 'src/constants';
import SeedlingImage from 'src/assets/images/seedling.jpg';
import { Title, SubTitle, StyledModal, Developer, Top, Text } from './styles';

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
          <Top>
            <Text>
              <Title>
                <FormattedMessage id="coming-soon.title" />
              </Title>
              <SubTitle>
                <FormattedMessage id="coming-soon.subtitle" />
              </SubTitle>
            </Text>
            <img src={SeedlingImage} alt="" />
          </Top>
          <Developer>
            <FormattedMessage
              id="coming-soon.developer.0"
              values={{
                github: (txt: string) => <a href={githubProject}>{txt}</a>,
                ranbena: (txt: string) => <a href={ranbenaPage}>{txt}</a>,
              }}
            />{' '}
            🧑‍💻
            <br />
            <FormattedMessage
              id="coming-soon.developer.1"
              values={{
                github: (txt: string) => <a href={githubProject}>{txt}</a>,
                ranbena: (txt: string) => <a href={ranbenaPage}>{txt}</a>,
              }}
            />
          </Developer>
        </StyledModal.Body>
      </StyledModal>
      {children(show)}
    </>
  );
};

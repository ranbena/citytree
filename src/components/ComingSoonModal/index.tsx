import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { githubProject, ranbenaPage, whatsappLink, tamiPhoneLink, PAGES } from 'src/constants';
import { forEachMessage } from 'src/utils';
import LeafContainer from '../LeafContainer';
import { Title, SubTitle, StyledModal, Developer, Top, Contact } from './styles';

export const ComingSoonModalProvider: React.FC<{
  children: (show: (e: React.MouseEvent) => void) => React.ReactNode;
}> = ({ children }) => {
  const intl = useIntl();
  const { locale } = intl;

  const [isVisible, setVisibility] = React.useState(false);
  const show = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setVisibility(true);
  }, []);
  const hide = React.useCallback(() => setVisibility(false), []);

  return (
    <>
      <StyledModal show={isVisible} onHide={hide} centered>
        <LeafContainer
          include={locale === 'he' ? 'left' : 'right'}
          excludeDefaultClassName
          opacity={0.6}
        >
          <StyledModal.Body>
            <Top>
              <Title>
                <FormattedMessage id="coming-soon.title" />
              </Title>
              <SubTitle>
                {forEachMessage(intl, 'coming-soon.text').map(([txt, key]) => (
                  <React.Fragment key={key}>
                    {txt}
                    <br />
                  </React.Fragment>
                ))}
              </SubTitle>
              <Contact>
                <FormattedMessage
                  id="coming-soon.contact"
                  values={{ whatsappLink, tamiPhoneLink }}
                />
              </Contact>
            </Top>
            <Developer>
              <h2>
                <FormattedMessage id="coming-soon.developer.title" />
              </h2>
              <p>
                <FormattedMessage
                  id="coming-soon.developer.text.0"
                  values={{
                    github: (txt: string) => (
                      <a href={githubProject} target="_blank" rel="noopener noreferrer">
                        {txt}
                      </a>
                    ),
                    ranbena: (txt: string) => (
                      <a href={ranbenaPage} target="_blank" rel="noopener noreferrer">
                        {txt}
                      </a>
                    ),
                  }}
                />
                <br />
                <FormattedMessage
                  id="coming-soon.developer.text.1"
                  values={{
                    a: (txt: string) => (
                      <a href={PAGES.employment} target="_blank" rel="noopener noreferrer">
                        {txt}
                      </a>
                    ),
                  }}
                />
              </p>
            </Developer>
          </StyledModal.Body>
        </LeafContainer>
      </StyledModal>
      {children(show)}
    </>
  );
};

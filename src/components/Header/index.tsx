/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler } from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { useIntl, FormattedMessage, navigate } from 'gatsby-plugin-intl';
import patreonLogo from 'src/assets/images/patreon-standalone.png';
import { airbnbUrl, joinPatreonUrl, PAGES, youtubeUrl } from 'src/constants';
import { anchor, formatPath, formatAnchor } from 'src/utils';
import { ComingSoonModalProvider } from '../ComingSoonModal';
import './styles.scss';

// TODO: move this to styles.ts when available
export const HEADER_HEIGHT = 90;

const stopPropagation: MouseEventHandler<HTMLDivElement> = (event) => event.stopPropagation();

const Header: React.FC = () => {
  const intl = useIntl();
  const { locale, formatMessage } = intl;
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  const onDocumentClick = React.useCallback(() => setIsNavExpanded(false), []);

  React.useEffect(() => {
    if (isNavExpanded) {
      document.addEventListener('click', onDocumentClick);
    }

    return () => document.removeEventListener('click', onDocumentClick);
  }, [isNavExpanded]);

  return (
    <header>
      <Container>
        <ComingSoonModalProvider>
          {(showModal) => (
            <Navbar expand="lg" onToggle={setIsNavExpanded} expanded={isNavExpanded}>
              <NavDropdown
                renderMenuOnMount
                id="logo-dropdown"
                title={formatMessage({ id: 'citytree' })}
                onClick={anchor(intl, 'top')}
              >
                <div onClick={stopPropagation}>
                  <NavDropdown.Item href={formatPath(intl, PAGES.people)}>
                    <FormattedMessage id="nav.main.people" />
                  </NavDropdown.Item>
                  <NavDropdown.Item className="disabled">
                    <FormattedMessage id="nav.main.huggers" />
                  </NavDropdown.Item>
                  <NavDropdown.Item href={formatAnchor(intl, 'contact')}>
                    <FormattedMessage id="nav.main.contact" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="disabled"
                    href={formatPath(intl, PAGES.money)}
                    onClick={showModal}
                  >
                    <FormattedMessage id="nav.main.money" />
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown
                    renderMenuOnMount
                    id="tours-dropdown"
                    title={formatMessage({ id: 'nav.tours.title' })}
                    onClick={() => navigate(PAGES.tours)}
                  >
                    <div onClick={stopPropagation}>
                      <NavDropdown.Item href={formatPath(intl, PAGES.groupTours)}>
                        <FormattedMessage id="nav.tours.groups" />
                      </NavDropdown.Item>
                      <NavDropdown.Item href={formatPath(intl, PAGES.privateTours)}>
                        <FormattedMessage id="nav.tours.private" />
                      </NavDropdown.Item>
                      <NavDropdown.Item href={formatPath(intl, PAGES.forageTours)}>
                        <FormattedMessage id="nav.tours.foraging" />
                      </NavDropdown.Item>
                      <NavDropdown.Item href={formatPath(intl, PAGES.magicTours)}>
                        <FormattedMessage id="nav.tours.magic" />
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount
                    id="workshops-dropdown"
                    title={formatMessage({ id: 'nav.workshops.title' })}
                    onClick={anchor(intl, 'workshops')}
                  >
                    <div onClick={stopPropagation}>
                      <NavDropdown.Item href={formatPath(intl, PAGES.practicalEcology)}>
                        <FormattedMessage id="nav.workshops.practical-ecology" />
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="disabled"
                        onClick={showModal}
                        href={formatPath(intl, PAGES.magicalEconomy)}
                      >
                        <FormattedMessage id="nav.workshops.magical-economy" />
                      </NavDropdown.Item>
                      <NavDropdown.Item href={formatPath(intl, PAGES.hineni)}>
                        <FormattedMessage id="nav.workshops.abracadabra" />
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount
                    id="stay-dropdown"
                    title={formatMessage({ id: 'nav.stay.title' })}
                    onClick={anchor(intl, 'stay')}
                  >
                    <div onClick={stopPropagation}>
                      <NavDropdown.Item href={airbnbUrl} target="_blank">
                        <FormattedMessage id="nav.stay.airbnb" />
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="disabled"
                        onClick={showModal}
                        href={formatPath(intl, PAGES.retreats)}
                      >
                        <FormattedMessage id="nav.stay.retreats" />
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="disabled"
                        onClick={showModal}
                        href={formatPath(intl, PAGES.apprenticeship)}
                      >
                        <FormattedMessage id="nav.stay.apprenticeship" />
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount
                    title={formatMessage({ id: 'nav.info.title' })}
                    id="info-dropdown"
                    onClick={anchor(intl, 'info')}
                  >
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.blog)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.info.posts" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.manifestos)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.info.manifestos" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.articles)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.info.articles" />
                    </NavDropdown.Item>
                    <NavDropdown.Item href={youtubeUrl} target="_blank">
                      <FormattedMessage id="nav.info.videos" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.glossary)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.info.glossary" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.references)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.info.references" />
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount
                    id="vision-dropdown"
                    title={formatMessage({ id: 'nav.vision.title' })}
                    onClick={anchor(intl, 'vision')}
                  >
                    <NavDropdown.Item onClick={anchor(intl, 'vision')}>
                      <FormattedMessage id="nav.vision.dream" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.trees)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.vision.trees" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.forestCity)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.vision.forest-city" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(intl, PAGES.poetry)}
                      onClick={showModal}
                    >
                      <FormattedMessage id="nav.vision.poetry" />
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Link className="nav-link" to={locale === 'en' ? '/' : '/en'}>
                    {locale === 'en' ? 'עברית' : 'EN'}
                  </Link>
                  <Button id="PatreonButton" href={joinPatreonUrl} as="a" target="_blank">
                    <img src={patreonLogo} alt={formatMessage({ id: 'donate.patreonTitle' })} />
                    <span>
                      <FormattedMessage id="nav.patreon" />
                    </span>
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )}
        </ComingSoonModalProvider>
      </Container>
    </header>
  );
};

export default Header;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import patreonLogo from 'src/assets/images/patreon-standalone.png';
import { joinPatreonUrl, PAGES } from 'src/constants';
import { anchor, formatPath, formatAnchor } from 'src/utils';
import './styles.scss';

// TODO: move this to styles.ts when available
export const HEADER_HEIGHT = 90;

const stopPropagation: MouseEventHandler<HTMLDivElement> = (event) => event.stopPropagation();

const Header: React.FC = () => {
  const intl = useIntl();
  const { locale, formatMessage } = intl;

  return (
    <header>
      <Container>
        <Navbar expand="lg">
          <NavDropdown
            renderMenuOnMount
            title={formatMessage({ id: 'citytree' })}
            id="logo-dropdown"
            onClick={anchor(intl, 'top')}
          >
            <div onClick={stopPropagation}>
              <NavDropdown.Item href={formatAnchor(intl, 'people')}>
                <FormattedMessage id="nav.main.staff" />
              </NavDropdown.Item>
              <NavDropdown.Item>
                <FormattedMessage id="nav.main.supporters" />
              </NavDropdown.Item>
              <NavDropdown.Item href={formatAnchor(intl, 'contact')}>
                <FormattedMessage id="nav.main.contact" />
              </NavDropdown.Item>
              <NavDropdown.Item>
                <FormattedMessage id="nav.main.money" />
              </NavDropdown.Item>
            </div>
          </NavDropdown>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown
                renderMenuOnMount
                title={formatMessage({ id: 'nav.tours.title' })}
                id="tours-dropdown"
                onClick={anchor(intl, 'tours')}
              >
                <div onClick={stopPropagation}>
                  <NavDropdown.Item>
                    <FormattedMessage id="nav.tours.groups" />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <FormattedMessage id="nav.tours.private" />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <FormattedMessage id="nav.tours.foraging" />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <FormattedMessage id="nav.tours.magic" />
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount
                title={formatMessage({ id: 'nav.workshops.title' })}
                id="workshops-dropdown"
                onClick={anchor(intl, 'workshops')}
              >
                <div onClick={stopPropagation}>
                  <NavDropdown.Item href={formatPath(intl, PAGES.practicalEcologySummer)}>
                    <FormattedMessage id="nav.workshops.practical-ecology" />
                  </NavDropdown.Item>
                  <NavDropdown.Item href={formatPath(intl, '/magical-economy')}>
                    <FormattedMessage id="nav.workshops.magical-economy" />
                  </NavDropdown.Item>
                  <NavDropdown.Item href={formatPath(intl, PAGES.hineni)}>
                    <FormattedMessage id="nav.workshops.abracadabra" />
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount
                title={formatMessage({ id: 'nav.stay.title' })}
                id="stay-dropdown"
                onClick={anchor(intl, 'stay')}
              >
                <div onClick={stopPropagation}>
                  <NavDropdown.Item>
                    <FormattedMessage id="nav.stay.airbnb" />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <FormattedMessage id="nav.stay.retreats" />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
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
                <NavDropdown.Item>
                  <FormattedMessage id="nav.info.posts" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.info.manifests" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.info.articles" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.info.videos" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.info.glossary" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.info.sources" />
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount
                title={formatMessage({ id: 'nav.vision.title' })}
                id="vision-dropdown"
                onClick={anchor(intl, 'vision')}
              >
                <NavDropdown.Item>
                  <FormattedMessage id="nav.vision.dream" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.vision.trees" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.vision.forest" />
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FormattedMessage id="nav.vision.poetry" />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {locale === 'en' ? (
                <Nav.Link href="/">עברית</Nav.Link>
              ) : (
                <Nav.Link href="/en">EN</Nav.Link>
              )}
              <Button id="PatreonButton" href={joinPatreonUrl} as="a" target="_blank">
                <img src={patreonLogo} alt={formatMessage({ id: 'donate.patreonTitle' })} />
                <FormattedMessage id="nav.patreon" />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;

import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import logo from 'src/assets/images/logo.png';
import { storeUrl } from 'src/constants';
import { formatPath } from '../../utils';
import './styles.scss';

// TODO: move this to styles.ts when available
export const HEADER_HEIGHT = 90;

const Header: React.FC = () => {
  const intl = useIntl();
  const href = (path: string) => formatPath(intl, path);
  const { locale, formatMessage } = intl;

  return (
    <header>
      <Container>
        <Navbar expand="lg" collapseOnSelect>
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt={formatMessage({ id: 'citytree' })} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href={href('/#visit')}>
                <FormattedMessage id="nav.visit" />
              </Nav.Link>
              <Nav.Link href={href('/#schedule')}>
                <FormattedMessage id="nav.schedule" />
              </Nav.Link>
              <NavDropdown
                renderMenuOnMount
                title={formatMessage({ id: 'nav.workshops.title' })}
                id="workshops-dropdown"
              >
                <NavDropdown.Item eventKey="all" href={href('/#workshops')}>
                  <FormattedMessage id="nav.workshops.all" />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  eventKey="practical-ecology"
                  href={formatMessage({ id: 'nav.workshops.cominghome.link' })}
                >
                  <FormattedMessage id="nav.workshops.cominghome.title" />
                  <small>
                    <FormattedMessage id="nav.workshops.cominghome.subtitle" />
                  </small>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="abracadabra" href="/en/abracadabra">
                  <FormattedMessage id="nav.workshops.abracadabra.title" />
                  <small>
                    <FormattedMessage id="nav.workshops.abracadabra.subtitle" />
                  </small>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={href('/#vision')}>
                <FormattedMessage id="nav.vision" />
              </Nav.Link>
              <Nav.Link href={storeUrl} target="_blank">
                <FormattedMessage id="nav.store" />
              </Nav.Link>
            </Nav>
            <Nav>
              {locale === 'en' ? (
                <Nav.Link href="/">עברית</Nav.Link>
              ) : (
                <Nav.Link href="/en">EN</Nav.Link>
              )}
              <Button variant="outline-secondary" href={href('/#donate')}>
                <FormattedMessage id="nav.donate" />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;

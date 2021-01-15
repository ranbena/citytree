import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import logo from 'src/assets/images/logo.png';
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
              <Nav.Link href={href('/#workshops')}>
                <FormattedMessage id="nav.workshops" />
              </Nav.Link>
              <Nav.Link href={href('/#vision')}>
                <FormattedMessage id="nav.vision" />
              </Nav.Link>
              <Nav.Link href="/cominghome">
                <FormattedMessage id="nav.cominghome" />
              </Nav.Link>
            </Nav>
            <Nav>
              {locale === 'en' ? (
                <Nav.Link href="/">עברית</Nav.Link>
              ) : (
                <Nav.Link href="/en">EN</Nav.Link>
              )}
              <Button variant="outline-secondary" href={href('#donate')}>
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

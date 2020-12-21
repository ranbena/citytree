/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import logo from '@/images/logo.png';
import './styles.scss';

const Header: React.FC = () => {
  const { formatMessage } = useIntl();

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
              <Nav.Link href="#visit">
                <FormattedMessage id="nav.visit" />
              </Nav.Link>
              <Nav.Link href="#workshops">
                <FormattedMessage id="nav.workshops" />
              </Nav.Link>
              <Nav.Link href="#vision">
                <FormattedMessage id="nav.vision" />
              </Nav.Link>
              <Nav.Link href="/cominghome">
                <FormattedMessage id="nav.cominghome" />
              </Nav.Link>
            </Nav>
            <Button variant="outline-secondary" href="#donate">
              <FormattedMessage id="nav.donate" />
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;

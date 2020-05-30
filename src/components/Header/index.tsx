import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavItems } from './constants';
import logo from '../../images/logo.png';
import './styles.scss';

export const Header: React.FC<{}> = () => (
  <header>
    <Container>
      <Navbar expand="lg">
        <span className="navbar-brand logo">
          <img src={logo} alt="עץבעיר" />
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {NavItems.map(({ title, link }) => (
              <Nav.Link href={link} key={title}>
                {title}
              </Nav.Link>
            ))}
          </Nav>
          <Button variant="outline-secondary" href="#donate">
            תרמו לעץ
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

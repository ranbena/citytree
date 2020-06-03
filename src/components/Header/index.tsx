/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavItems, donateButtonText } from './constants';
import logo from '../../images/logo.png';
import './styles.scss';

export const Header: React.FC<{}> = () => (
  <header>
    <Container>
      <Navbar expand="lg" collapseOnSelect>
        <a className="navbar-brand logo" href="#">
          <img src={logo} alt="עץבעיר" />
        </a>
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
            {donateButtonText}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

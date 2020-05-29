import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
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
            <a href="#vision" className="nav-link">
              החזון של עץבעיר
            </a>
            <a href="#shop" className="nav-link">
              החנות הקטנה שלנו
            </a>
            <a href="#contact" className="nav-link">
              צרו קשר
            </a>
          </Nav>
          <Button variant="outline-secondary" href="#donate">
            תרמו לעץ
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);

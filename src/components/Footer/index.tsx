import React from 'react';
import { Container } from 'react-bootstrap';
import { MdLink } from 'react-icons/md';
import logo from '../../images/logo.png';
import { phone, email } from '../../constants';
import './styles.scss';

export const Footer: React.FC<{}> = () => (
  <footer>
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <a
          href="http://archives.citytree.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink /> אל האתר הישן והאהוב
        </a>
        <img src={logo} alt="CityTree" height="100" />
        <div id="info">
          אנחנו כאן לשירותך
          <br />
          <a href={`tel:${phone}`}>{phone}</a> |{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </Container>
  </footer>
);

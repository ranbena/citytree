/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import { Container } from 'react-bootstrap';
import { MdLink } from 'react-icons/md';
import logo from '../../images/logo.png';
import './styles.scss';

export const Footer: React.FC<{}> = () => (
  <footer>
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <a
          href="http://citytree.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink /> אל האתר הישן והאהוב
        </a>
        <img src={logo} alt="CityTree" height="100" />
        <div id="info">
          אנחנו כאן לשירותך
          <br />
          <a href="tel:+97235254196">03-5254196</a> |{' '}
          <a href="mailto:tree@citytree.net">tree@citytree.net</a>
        </div>
      </div>
    </Container>
  </footer>
);

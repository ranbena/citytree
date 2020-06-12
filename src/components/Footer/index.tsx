import React from 'react';
import { Container } from 'react-bootstrap';
import { MdLink } from 'react-icons/md';
import logo from '../../images/logo.png';
import { phone, email } from '../../constants';
import FacebookIcon from '../../images/social_facebook.svg';
import InstagramIcon from '../../images/social_instagram.svg';
import YoutubeIcon from '../../images/social_youtube.svg';
import './styles.scss';

export const Footer: React.FC<{}> = () => (
  <footer>
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <a href="http://archives.citytree.net/" target="_blank" rel="noopener noreferrer">
          <MdLink /> אל האתר הישן והאהוב
        </a>
        <img src={logo} alt="CityTree" className="logo" />
        <div id="info">
          אנחנו כאן
          <br />
          <a href={`tel:${phone}`}>{phone}</a> | <a href={`mailto:${email}`}>{email}</a>
          <div className="social">
            <a href="https://www.youtube.com/user/citytreenet/">
              <img src={YoutubeIcon} alt="עץבעיר ביוטיוב" />
            </a>
            <a href="https://www.instagram.com/citytreetlv/">
              <img src={InstagramIcon} alt="עץבעיר באינסטגרם" />
            </a>
            <a href="https://facebook.com/citytree">
              <img src={FacebookIcon} alt="עץבעיר בפייסבוק" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

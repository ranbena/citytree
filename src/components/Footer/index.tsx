import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { email } from '@/constants';

import logo from '@/images/logo.png';
import FacebookIcon from '@/images/social_facebook.svg';
import InstagramIcon from '@/images/social_instagram.svg';
import YoutubeIcon from '@/images/social_youtube.svg';
import './styles.scss';

const Footer: FC = () => {
  const { formatMessage } = useIntl();
  const youtube = formatMessage({ id: 'footer.youtube' });
  const instagram = formatMessage({ id: 'footer.instagram' });
  const facebook = formatMessage({ id: 'footer.facebook' });

  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div id="info">
            <FormattedMessage id="footer.text" />
            <br />
            <FormattedMessage id="phone">
              {(phone) => <a href={`tel:${phone}`}>{phone}</a>}
            </FormattedMessage>{' '}
            | <a href={`mailto:${email}`}>{email}</a>
          </div>
          <img src={logo} alt="CityTree" className="logo" />
          <div className="social">
            <a href="https://www.youtube.com/user/citytreenet/" title={youtube}>
              <img src={YoutubeIcon} alt={youtube} />
            </a>
            <a href="https://www.instagram.com/citytreetlv/" title={instagram}>
              <img src={InstagramIcon} alt={instagram} />
            </a>
            <a href="https://facebook.com/citytree" title={facebook}>
              <img src={FacebookIcon} alt={facebook} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

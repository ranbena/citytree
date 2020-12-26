import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { email } from '@/constants';

import logo from '@/images/logo.png';
import FacebookIcon from '@/images/social_facebook.svg';
import InstagramIcon from '@/images/social_instagram.svg';
import YoutubeIcon from '@/images/social_youtube.svg';
import { Wrapper, Social, Info, Link, Logo } from './styles';

const Footer: FC = () => {
  const { formatMessage } = useIntl();
  const youtube = formatMessage({ id: 'footer.youtube' });
  const instagram = formatMessage({ id: 'footer.instagram' });
  const facebook = formatMessage({ id: 'footer.facebook' });

  return (
    <Wrapper>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <Info>
            <FormattedMessage id="footer.text" />
            <br />
            <FormattedMessage id="phone">
              {(phone) => <a href={`tel:${phone}`}>{phone}</a>}
            </FormattedMessage>{' '}
            | <a href={`mailto:${email}`}>{email}</a>
            <Social>
              <a href="https://www.youtube.com/user/citytreenet/" title={youtube}>
                <img src={YoutubeIcon} alt={youtube} />
              </a>
              <a href="https://www.instagram.com/citytreetlv/" title={instagram}>
                <img src={InstagramIcon} alt={instagram} />
              </a>
              <a href="https://facebook.com/citytree" title={facebook}>
                <img src={FacebookIcon} alt={facebook} />
              </a>
            </Social>
          </Info>
          <Logo src={logo} alt="CityTree" className="logo" />
          <div>
            <Link href="http://archives.citytree.net">
              <FormattedMessage id="footer.archive" />
            </Link>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;

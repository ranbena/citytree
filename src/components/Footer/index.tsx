import React from 'react';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import {
  emailLink,
  facebookUrl,
  tamiPhoneLink,
  PAGES,
  whatsappUrl,
  youtubeUrl,
  instagramUrl,
} from 'src/constants';
import logo from 'src/assets/images/logo.png';
import { ReactComponent as FacebookIcon } from 'src/assets/images/icon_facebook.svg';
import { ReactComponent as YoutubeIcon } from 'src/assets/images/icon_youtube.svg';
import { ReactComponent as WhatsappIcon } from 'src/assets/images/icon_whatsapp.svg';
import { ReactComponent as InstagramIcon } from 'src/assets/images/icon_instagram.svg';
import { formatAnchor } from 'src/utils';
import LeafContainer from '../LeafContainer';
import { Wrapper, Social, Info, Logo, Content } from './styles';

const Footer: React.FC = () => {
  const intl = useIntl();
  const youtube = intl.formatMessage({ id: 'footer.youtube' });
  const whatsapp = intl.formatMessage({ id: 'footer.whatsapp' });
  const facebook = intl.formatMessage({ id: 'footer.facebook' });
  const instagram = intl.formatMessage({ id: 'footer.instagram' });

  return (
    <Wrapper>
      <LeafContainer opacity={0.15}>
        <Content>
          <Info>
            <Logo src={logo} alt="CityTree" className="logo" />
            <div>
              <FormattedMessage id="footer.text" />
              <br />
              {tamiPhoneLink} | {emailLink}
            </div>
          </Info>
          <Social>
            <a href={instagramUrl} title={instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href={youtubeUrl} title={youtube} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon />
            </a>
            <a
              href={facebookUrl}
              title={facebook}
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a href={whatsappUrl} title={whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon />
            </a>
          </Social>
          <div>
            <a href={PAGES.people} target="_blank" rel="noreferrer noopener">
              <FormattedMessage id="nav.main.about" />
            </a>
            <br />
            <a href={formatAnchor(intl, 'contact')}>
              <FormattedMessage id="nav.main.contact" />
            </a>
            <br />
            <a href="http://archives.citytree.net">
              <FormattedMessage id="footer.archive" />
            </a>
          </div>
        </Content>
      </LeafContainer>
    </Wrapper>
  );
};

export default Footer;

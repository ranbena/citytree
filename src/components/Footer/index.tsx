import React from 'react';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import {
  emailLink,
  facebookUrl,
  homePhoneLink,
  PAGES,
  whatsappUrl,
  youtubeUrl,
} from 'src/constants';
import logo from 'src/assets/images/logo.png';
import { ReactComponent as FacebookIcon } from 'src/assets/images/icon_facebook.svg';
import { ReactComponent as YoutubeIcon } from 'src/assets/images/icon_youtube.svg';
import { ReactComponent as WhatsappIcon } from 'src/assets/images/icon_whatsapp.svg';
import { formatAnchor } from 'src/utils';
import LeafContainer from '../LeafContainer';
import { Wrapper, Social, Info, Logo, Content } from './styles';

const Footer: React.FC = () => {
  const intl = useIntl();
  const youtube = intl.formatMessage({ id: 'footer.youtube' });
  const whatsapp = intl.formatMessage({ id: 'footer.whatsapp' });
  const facebook = intl.formatMessage({ id: 'footer.facebook' });

  return (
    <Wrapper>
      <LeafContainer opacity={0.15}>
        <Content>
          <Info>
            <Logo src={logo} alt="CityTree" className="logo" />
            <div>
              <FormattedMessage id="footer.text" />
              <br />
              {homePhoneLink} | {emailLink}
            </div>
          </Info>
          <Social>
            <a href={youtubeUrl} title={youtube}>
              <YoutubeIcon />
            </a>
            <a href={facebookUrl} title={facebook} className="facebook">
              <FacebookIcon />
            </a>
            <a href={whatsappUrl} title={whatsapp}>
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

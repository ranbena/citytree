import React from 'react';
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
import FacebookIcon from 'src/assets/images/icon_facebook.svg';
import YoutubeIcon from 'src/assets/images/icon_youtube.svg';
import WhatsappIcon from 'src/assets/images/icon_whatsapp.svg';
import InstagramIcon from 'src/assets/images/icon_instagram.svg';
import { formatAnchor } from 'src/utils';
import LeafContainer from '../LeafContainer';
import { Wrapper, Social, Info, Logo, Content } from './styles';

const Footer: React.FC = () => {
  const youtube = 'עץבעיר ביוטיוב';
  const whatsapp = 'עץבעיר בוואטסאפ';
  const facebook = 'עץבעיר בפייסבוק';
  const instagram = 'עץבעיר באינטסגרם';

  return (
    <Wrapper>
      <LeafContainer opacity={0.15}>
        <Content>
          <Info>
            <Logo src={logo} alt="CityTree" className="logo" />
            <div>
              אנחנו כאן
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
            <a href={formatAnchor('contact')}>צרו קשר</a>
            <br />
            <a href={PAGES.people} target="_blank" rel="noreferrer noopener">
              מי אנחנו
            </a>
            <br />
            <a href="http://archives.citytree.net">לאתר הישן נושן והאהוב של העץ</a>
          </div>
        </Content>
      </LeafContainer>
    </Wrapper>
  );
};

export default Footer;

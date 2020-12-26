import React, { FC, useEffect, useRef, Fragment } from 'react';
import { Container, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { forEachMessage } from 'src/utils';
import { patreonUrl, bitPhone } from 'src/constants';

import ezpayImage from 'src/images/ezpay.png';
import bitpayImage from 'src/images/bitpay.png';
import bitpayIcon from 'src/images/bit-transfer.gif';
import paypalImage from 'src/images/paypal.svg';
import leafLeftImageUrl from 'src/images/leaf-mid.png';
import leafBottomImageUrl from 'src/images/leaf-bottom.png';
import patreonImage from 'src/images/patreon.png';
import './styles.scss';

const Subscribe: FC = () => {
  const el = useRef(null);
  const { formatMessage } = useIntl();

  const formId = formatMessage({ id: 'newsletter.formId' });
  const dataFormId = formatMessage({ id: 'newsletter.dataFormId' });
  const direction = formatMessage({ id: 'direction' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.creaditor.com/formCreator/assets/fc-basics.min.js';
    el.current.appendChild(script);
  }, []);

  return (
    <div className="box subscribe">
      <div
        ref={el}
        className={`fc-form form_${formId} type-vertical ${direction}`}
        data-form-id={dataFormId}
        data-smart="true"
        style={{ width: 433, height: 370, margin: 'auto' }}
      />
    </div>
  );
};

const Textbox = () => {
  const intl = useIntl();

  return (
    <div className="box text-box">
      <h1>
        <FormattedMessage id="invitation.title1" />
      </h1>
      <p>
        {forEachMessage(intl, 'invitation.text1').map((txt: string) => (
          <Fragment key={txt}>
            {txt}
            <br />
            <br />
          </Fragment>
        ))}
      </p>
      <h2>
        <FormattedMessage id="invitation.title2" />
      </h2>
      {forEachMessage(intl, 'invitation.text2').map((txt: string) => (
        <p key={txt}>{txt}</p>
      ))}
      <p>
        <a href={patreonUrl} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="invitation.patreonText" />
        </a>
      </p>
    </div>
  );
};

const PopoverButton = ({ text, children }) => (
  <>
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={
        <Popover id="popover-button">
          <Popover.Content>{text}</Popover.Content>
        </Popover>
      }
    >
      <Button variant="light" size="sm">
        {children}
      </Button>
    </OverlayTrigger>
  </>
);

const DonateButton = ({
  linkUrl = null,
  disabled = false,
  imageUrl = null,
  title = null,
  text = null,
  maxHeight = null,
}) => {
  const icon = imageUrl ? <img src={imageUrl} alt={title} style={{ maxHeight }} /> : title;

  if (!disabled && !linkUrl && text) {
    return <PopoverButton text={text}>{icon}</PopoverButton>;
  }

  return (
    <Button as="a" size="sm" href={linkUrl} target="_blank" variant="light" disabled={disabled}>
      {icon}
    </Button>
  );
};

const Donatebox = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="box donate-box">
      <h2>
        <FormattedMessage id="donate.title" />
      </h2>
      <p className="txt-patreon">
        <FormattedMessage id="donate.text" />
      </p>
      <div className="btn-patreon">
        <Button
          title={formatMessage({ id: 'donate.patreonTitle' })}
          as="a"
          href={patreonUrl}
          target="_blank"
        >
          <img src={patreonImage} alt={formatMessage({ id: 'donate.patreonTitle' })} />
        </Button>
      </div>
      <hr />
      <span>
        <FormattedMessage id="or" />
      </span>
      <p>
        <FormattedMessage id="donate.subtitle" />
      </p>
      <div className="buttons">
        <DonateButton
          title={formatMessage({ id: 'donate.channels.bit' })}
          imageUrl={bitpayImage}
          text={
            <>
              <img
                width="18"
                height="18"
                src={bitpayIcon}
                alt={formatMessage({ id: 'donate.channels.bitText' })}
              />{' '}
              <FormattedMessage id="donate.channels.bitText" /> {bitPhone}
            </>
          }
        />
        <DonateButton
          title={formatMessage({ id: 'donate.channels.paypal' })}
          linkUrl="https://www.paypal.me/citytree"
          imageUrl={paypalImage}
          maxHeight={20}
        />
        <DonateButton
          title={formatMessage({ id: 'donate.channels.ezpay' })}
          linkUrl="https://www.ezpay.co.il/Payment.aspx?id=13295"
          imageUrl={ezpayImage}
        />
        <DonateButton
          title={formatMessage({ id: 'donate.channels.cash' })}
          text={formatMessage({ id: 'donate.channels.cashText' })}
        />
      </div>
    </div>
  );
};

const DonateSection: React.FC = () => (
  <section className="donateSection anchorWrapper">
    <div className="anchor" id="donate" />
    <img src={leafLeftImageUrl} alt="leaf" className="side-leaf" />
    <div className="bottom-leaf">
      <img src={leafBottomImageUrl} alt="leaf" />
    </div>
    <Container className="gridContainer">
      <Textbox />
      <Donatebox />
      <Subscribe />
    </Container>
  </section>
);

export default DonateSection;

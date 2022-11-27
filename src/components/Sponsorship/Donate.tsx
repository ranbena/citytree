import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { patreonUrl, bitPhone, paypalUrl, payboxUrl } from 'src/constants';

import payboxImage from 'src/assets/images/paybox.png';
import bitpayImage from 'src/assets/images/bitpay.png';
import bitpayIcon from 'src/assets/images/bit-transfer.gif';
import paypalImage from 'src/assets/images/paypal.svg';
import patreonImage from 'src/assets/images/patreon.png';

const PopoverButton: React.FC<{ text: string | React.ReactNode; children: React.ReactNode }> = ({
  text,
  children,
}) => (
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

const DonateButton: React.FC<{
  linkUrl?: string;
  disabled?: boolean;
  imageUrl?: string;
  title?: string;
  text?: string | React.ReactNode;
  maxHeight?: number;
}> = ({ linkUrl, disabled = false, imageUrl, title, text, maxHeight }) => {
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

const Donate: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="donate">
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
      <p>
        <FormattedMessage id="donate.subtitle.0" />
        <br />
        <FormattedMessage id="donate.subtitle.1" />
      </p>
      <div className="buttons">
        <DonateButton
          title={formatMessage({ id: 'donate.channels.paybox' })}
          linkUrl={payboxUrl}
          imageUrl={payboxImage}
        />
        <DonateButton
          title={formatMessage({ id: 'donate.channels.cash' })}
          text={formatMessage({ id: 'donate.channels.cashText' })}
        />
        <DonateButton
          title={formatMessage({ id: 'donate.channels.paypal' })}
          linkUrl={paypalUrl}
          imageUrl={paypalImage}
          maxHeight={20}
        />
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
      </div>
    </div>
  );
};

export default Donate;

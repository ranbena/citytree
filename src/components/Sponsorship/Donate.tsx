import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
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

const Donate: React.FC = () => (
  <div className="donate">
    <div className="btn-patreon">
      <Button title="היו פטרונים" as="a" href={patreonUrl} target="_blank">
        <img src={patreonImage} alt="היו פטרונים" />
      </Button>
    </div>
    <p>
      לתשלום חד פעמי עבור סיור, לימוד, ייעוץ,
      <br />
      או פשוט כי בא לכן:
    </p>
    <div className="buttons">
      <DonateButton title="פייבוקס" linkUrl={payboxUrl} imageUrl={payboxImage} />
      <DonateButton
        title="כמו פעם: מזומן!"
        text="כסף הוא גם חומר! בואו לבקר ושלמו במטבעות ובניירות כמו פעם!"
      />
      <DonateButton title="פייפאל" linkUrl={paypalUrl} imageUrl={paypalImage} maxHeight={20} />
      <DonateButton
        title="ביט"
        imageUrl={bitpayImage}
        text={
          <>
            <img
              width="18"
              height="18"
              src={bitpayIcon}
              alt="העבירו בביט למספר הסלולרי של עץבעיר"
            />{' '}
            העבירו בביט למספר הסלולרי של עץבעיר {bitPhone}
          </>
        }
      />
    </div>
  </div>
);

export default Donate;

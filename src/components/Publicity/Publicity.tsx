import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { patreonUrl, bitPhone, paypalUrl, payboxUrl, bankAccount } from 'src/constants';

import payboxImage from 'src/assets/images/paybox.png';
import bitpayImage from 'src/assets/images/bitpay.png';
import bitpayIcon from 'src/assets/images/bit-transfer.gif';
import paypalImage from 'src/assets/images/paypal.png';
import patreonImage from 'src/assets/images/patreon.png';

const PopoverButton: React.FC<{ text: string | React.ReactNode; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>();

  return (
    <>
      <OverlayTrigger
        rootClose
        trigger="click"
        placement="top"
        overlay={
          <Popover id="popover-button">
            <Popover.Body className="popover-body">{text}</Popover.Body>
          </Popover>
        }
      >
        <Button ref={buttonRef} variant="light" size="sm">
          {children}
        </Button>
      </OverlayTrigger>
    </>
  );
};

const PublicityButton: React.FC<{
  linkUrl?: string;
  disabled?: boolean;
  image?: string;
  title?: string;
  text?: string | React.ReactNode;
  maxHeight?: number;
}> = ({ linkUrl, disabled = false, image, title, text, maxHeight }) => {
  const icon = image ? <img src={image} alt={title} style={{ maxHeight }} /> : title;

  if (!disabled && !linkUrl && text) {
    return <PopoverButton text={text}>{icon}</PopoverButton>;
  }

  return (
    <Button as="a" size="sm" href={linkUrl} target="_blank" variant="light" disabled={disabled}>
      {icon}
    </Button>
  );
};

const Publicity: React.FC = () => (
  <div className="publicity">
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
      <PublicityButton title="פייבוקס" linkUrl={payboxUrl} image={payboxImage} />
      <PublicityButton title="פייפאל" linkUrl={paypalUrl} image={paypalImage} maxHeight={20} />
      <PublicityButton
        title="ביט"
        image={bitpayImage}
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
      <PublicityButton
        title="כמו פעם: מזומן!"
        text="כסף הוא גם חומר! בואו לבקר ושלמו במטבעות ובניירות כמו פעם!"
      />
      <PublicityButton
        title="העברה בנקאית"
        text={
          <>
            פרטים של חשבון הבנק:
            <br />
            {bankAccount.bank} סניף {bankAccount.branch}
            <br />
            חשבון {bankAccount.account}
            <br />
            {bankAccount.name}
          </>
        }
      />
    </div>
  </div>
);

export default Publicity;

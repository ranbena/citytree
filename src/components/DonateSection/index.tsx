import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { Invitation, Donate } from './constants';
import './styles.scss';

const Subscribe = () => {
  const el = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.creaditor.com/formCreator/assets/fc-basics.min.js';
    el.current.appendChild(script);
  }, []);

  return (
    <div className="box subscribe">
      <div
        ref={el}
        className="fc-form form_224128 type-vertical rtl"
        data-form-id="224128-29f304e5-d488-3bdc-2f42-f345ae38fc83-22"
        data-smart="true"
        style={{ width: 433, height: 370, margin: 'auto' }}
      />
    </div>
  );
};

const Textbox = () => (
  <div className="box">
    <h1>{Invitation.title1}</h1>
    <p>{Invitation.text1}</p>
    <br />
    <h2>{Invitation.title2}</h2>
    <p>{Invitation.text2}</p>
  </div>
);

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
  text = null,
  disabled = false,
  imageUrl,
  title,
  maxHeight = null,
}) => {
  const image = <img src={imageUrl} alt={title} style={{ maxHeight }} />;

  if (!disabled && !linkUrl && text) {
    return <PopoverButton text={text}>{image}</PopoverButton>;
  }

  return (
    <Button as="a" size="sm" href={linkUrl} target="_blank" variant="light" disabled={disabled}>
      {image}
    </Button>
  );
};

const Donatebox = () => {
  const { patreon: pat, buttons } = Donate;
  return (
    <div className="box">
      <h2>{Donate.title}</h2>
      <p>{Donate.subtitle}</p>
      <div className="buttons">
        {buttons.map((data) => (
          <DonateButton key={data.title} {...data} />
        ))}
      </div>
      <hr />
      <p className="txt-patreon">{pat.text}</p>
      <div className="btn-patreon">
        <Button title={pat.title} as="a" href={pat.linkUrl} target="_blank">
          <img src={pat.imageUrl} alt={pat.title} />
        </Button>
      </div>
    </div>
  );
};

export const DonateSection: React.FC<{}> = () => (
  <div className="anchor" id="donate">
    <section className="donateSection container-padding">
      <Container>
        <Row>
          <Col xl={7}>
            <Textbox />
          </Col>
          <Col xl={5} className="wrapper-col">
            <Col lg={6} xl={12}>
              <Donatebox />
            </Col>
            <Col lg={6} xl={12}>
              <Subscribe />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

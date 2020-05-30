import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Invitation, Donate } from './constants';
import './styles.scss';

const Subscribe = () => {
  const el = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    // eslint-disable-next-line prettier/prettier
    script.src =
      'https://app.creaditor.com/formCreator/assets/fc-basics.min.js';
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

export const DonateSection: React.FC<{}> = () => {
  const { patreon: pat, buttons } = Donate;
  const { title1, text1, title2, text2 } = Invitation;
  return (
    <div className="anchor" id="donate">
      <section className="donateSection">
        <Container>
          <Row>
            <Col xl={7}>
              <div className="box">
                <h1>{title1}</h1>
                <p>{text1}</p>
                <br />
                <h2>{title2}</h2>
                <p>{text2}</p>
              </div>
            </Col>
            <Col xl={5} className="wrapper-col">
              <Col lg={6} xl={12}>
                <div className="box">
                  <h2>{Donate.title}</h2>
                  <p>{Donate.subtitle}</p>
                  <div className="buttons">
                    {buttons.map(
                      ({ title, linkUrl, imageUrl, maxHeight, disabled }) => (
                        <Button
                          key={title}
                          as="a"
                          size="sm"
                          href={linkUrl}
                          target="_blank"
                          variant="light"
                          disabled={disabled}
                        >
                          <img
                            src={imageUrl}
                            alt={title}
                            style={{ maxHeight }}
                          />
                        </Button>
                      ),
                    )}
                  </div>
                  <hr />
                  <p className="txt-patreon">{pat.text}</p>
                  <div className="btn-patreon">
                    <Button
                      title={pat.title}
                      as="a"
                      href={pat.linkUrl}
                      target="_blank"
                    >
                      <img src={pat.imageUrl} alt={pat.title} />
                    </Button>
                  </div>
                </div>
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
};

import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Container, Col } from 'react-bootstrap';
import { forEachMessage } from '@/utils';
import { Parallax } from 'react-parallax';
import image from '@/images/our-vision.jpg';
import './styles.scss';

const OurVision = () => {
  const intl = useIntl();

  return (
    <Parallax bgImage={image} strength={300}>
      <div className="ourVision anchorWrapper">
        <div className="anchor" id="vision" />
        <Container>
          <Col lg={6} md={11} className="content">
            <h1>
              <FormattedMessage id="vision.title" />
            </h1>
            {forEachMessage(intl, 'vision.text').map((txt: string) => (
              <p key={txt}>{txt}</p>
            ))}
            <p>
              <FormattedMessage
                id="vision.manifest"
                values={{
                  manifest: (txt: string) => (
                    <a
                      href="https://drive.google.com/open?id=1sRnYba3-KKjY60wHcFjMuEZhF2L_xLtGyNoftp14hds"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {txt}
                    </a>
                  ),
                }}
              />
            </p>
            <p>
              <FormattedMessage
                id="vision.kikar"
                values={{
                  kikar: (txt: string) => (
                    <a
                      href="https://docs.google.com/document/d/1b-QhBATJthVpK5mlpiwFuAFlIQye8mAQk5j8wZHT1uo/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {txt}
                    </a>
                  ),
                  urban: (txt: string) => (
                    <a
                      href="https://docs.google.com/document/d/1pfRqG6__fZCEDMAFi-1WJ1pJBYBwGcKH63fL4Y5Zomk/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {txt}
                    </a>
                  ),
                }}
              />
            </p>
            <p>
              <FormattedMessage
                id="vision.trees"
                values={{
                  trees: (txt: string) => (
                    <a href="https://drive.google.com/open?id=1OPQ_smWf0miSQwqI91VAMoR6EqXnJ1ZJMygJkpwVh9s">
                      {txt}
                    </a>
                  ),
                }}
              />
            </p>
          </Col>
        </Container>
      </div>
    </Parallax>
  );
};

export default OurVision;

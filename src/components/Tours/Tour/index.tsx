import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FsLightbox from 'fslightbox-react';
import LeafContainer from 'src/components/LeafContainer';
import { Hero, ImageContainer, LightboxItem, ThumbItem } from './styles';

interface IProps {
  anchor: 'tami' | 'einat' | 'forage' | 'sessions' | 'virtual';
  box: React.ReactNode;
  images: { thumb: React.ReactElement; full: React.ReactElement }[];
  bgcolor: string;
  reverseLayout?: boolean;
}

const Tour: React.FC<React.PropsWithChildren<IProps>> = ({
  anchor,
  box,
  images,
  bgcolor,
  reverseLayout,
}) => {
  const [lightboxController, setLightboxController] = React.useState({
    toggler: false,
    slide: 1,
  });
  const thumbs = React.useMemo(() => images.map(({ thumb }) => thumb), [images]);
  const fulls = React.useMemo(
    () => images.map(({ full }) => <LightboxItem>{full}</LightboxItem>),
    [images],
  );

  return (
    <>
      <Hero anchor={anchor} bgColor={bgcolor}>
        <LeafContainer opacity={0.2}>
          <Row style={{ flexDirection: reverseLayout ? 'row-reverse' : 'row' }}>
            <Col lg={6}>{box}</Col>
            <Col lg={6} className="side-column">
              <ImageContainer>
                {thumbs.map((thumb, idx) => (
                  <ThumbItem
                    key={thumb.props.src}
                    onClick={() =>
                      setLightboxController({
                        toggler: !lightboxController.toggler,
                        slide: idx + 1,
                      })
                    }
                  >
                    {thumb}
                  </ThumbItem>
                ))}
              </ImageContainer>
            </Col>
          </Row>
        </LeafContainer>
      </Hero>
      <FsLightbox
        className="hello"
        toggler={lightboxController.toggler}
        sources={fulls}
        slide={lightboxController.slide}
        disableSlideSwiping
      />
    </>
  );
};

export default Tour;

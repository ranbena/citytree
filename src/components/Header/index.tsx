import React, { MouseEventHandler } from 'react';
// import { Link } from 'gatsby';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import patreonLogo from 'src/assets/images/patreon-standalone.png';
import { joinPatreonUrl, PAGES, youtubeUrl, podcastUrl, papersUrl } from 'src/constants';
import { anchor, formatPath, formatAnchor } from 'src/utils';
import { ComingSoonModalProvider } from '../ComingSoonModal';
import './styles.scss';
import { navigate } from 'gatsby';

export const HEADER_HEIGHT = 90;

const stopPropagation: MouseEventHandler<HTMLDivElement> = (event) => event.stopPropagation();

const Header: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  const onDocumentClick = React.useCallback(() => setIsNavExpanded(false), []);

  React.useEffect(() => {
    if (isNavExpanded) {
      document.addEventListener('click', onDocumentClick);
    }

    return () => document.removeEventListener('click', onDocumentClick);
  }, [isNavExpanded]);

  return (
    <header>
      <Container>
        <ComingSoonModalProvider>
          {(showModal) => (
            <Navbar expand="lg" onToggle={setIsNavExpanded} expanded={isNavExpanded}>
              <NavDropdown
                renderMenuOnMount
                id="logo-dropdown"
                title="עץבעיר"
                onClick={() => navigate('/')}
              >
                <div onClick={stopPropagation}>
                  <NavDropdown.Item href={formatAnchor('people')}>א'נשי העץ</NavDropdown.Item>
                  <NavDropdown.Item href={formatAnchor('contact')}>לקשור קשר</NavDropdown.Item>
                  <NavDropdown.Item href={formatAnchor('sponsor')}>לחבק את העץ</NavDropdown.Item>
                  {/* <NavDropdown.Item
                    className="disabled"
                    href={formatPath(PAGES.money)}
                    onClick={showModal}
                  >
                    כסף
                  </NavDropdown.Item> */}
                </div>
              </NavDropdown>

              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={stopPropagation} />
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown
                    renderMenuOnMount
                    id="tours-dropdown"
                    title="לימוד בעולם האמיתי"
                    onClick={() => navigate(formatPath(PAGES.lectures))}
                  >
                    <div onClick={stopPropagation}>
                      <NavDropdown.Item href={formatPath(PAGES.forageTours)}>
                        סיורי ליקוט עם אלון
                      </NavDropdown.Item>
                      <NavDropdown.Item href={formatPath(PAGES.sessions)}>
                        עושות חיים בתל חובז
                      </NavDropdown.Item>
                      <NavDropdown.Item href={formatPath(PAGES.tamiLecture)}>
                        הרצאה של תמי צרי
                      </NavDropdown.Item>
                      <NavDropdown.Item href={formatPath(PAGES.einatLecture)}>
                        הרצאה של עינת לסט
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item href={formatPath(PAGES.virtual)}>
                        עץבעיר - ההרצאה
                      </NavDropdown.Item> */}
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount
                    id="workshops-dropdown"
                    title="לימוד מקוון"
                    onClick={() => navigate(formatPath(PAGES.virtual))}
                  >
                    <div onClick={stopPropagation}>
                      <NavDropdown.Item href={formatPath(PAGES.virtual)}>
                        סדנאות אקולוגיה מעשית
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item
                        className="disabled"
                        onClick={showModal}
                        href={formatPath(PAGES.magicalEconomy)}
                      >
                        כלכלת קסם - לימוד חודשי
                      </NavDropdown.Item> */}
                      <NavDropdown.Item href={formatPath(PAGES.abrakadabra)}>
                        קורס כישוף ואקולוגיה עמוקה
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item className="disabled" onClick={showModal}>
                        עושות חיים בבית - מעגל חדש
                      </NavDropdown.Item> */}
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount
                    title="מרכז ידע"
                    id="info-dropdown"
                    onClick={anchor('info')}
                  >
                    {/* <NavDropdown.Item
                      className="disabled"
                      href={formatPath(PAGES.manifestos)}
                      onClick={showModal}
                    >
                      מניפסטים
                    </NavDropdown.Item> */}
                    <NavDropdown.Item href={papersUrl} target="_blank">
                      הגות
                    </NavDropdown.Item>
                    <NavDropdown.Item href={podcastUrl} target="_blank">
                      הסכת במשעול הצר
                    </NavDropdown.Item>
                    <NavDropdown.Item href={youtubeUrl} target="_blank">
                      סרטוני השיבה הביתה
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      className="disabled"
                      href={formatPath(PAGES.glossary)}
                      onClick={showModal}
                    >
                      מילון עץבעיר
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(PAGES.references)}
                      onClick={showModal}
                    >
                      רשימת מקורות
                    </NavDropdown.Item> */}
                  </NavDropdown>

                  <NavDropdown
                    renderMenuOnMount
                    id="vision-dropdown"
                    title="חלום"
                    onClick={anchor('vision')}
                  >
                    <NavDropdown.Item onClick={anchor('vision')}>עץ חולם על העולם</NavDropdown.Item>
                    {/* <NavDropdown.Item
                      className="disabled"
                      href={formatPath(PAGES.trees)}
                      onClick={showModal}
                    >
                      אחוות העצים
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(PAGES.forestCity)}
                      onClick={showModal}
                    >
                      עיר־יער
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="disabled"
                      href={formatPath(PAGES.poetry)}
                      onClick={showModal}
                    >
                      שירת האלון
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
                <Nav>
                  {/* <Link className="nav-link" to={locale === 'en' ? '/' : '/en'}>
                    {locale === 'en' ? 'עברית' : 'EN'}
                  </Link> */}
                  <Button id="PatreonButton" href={joinPatreonUrl} as="a" target="_blank">
                    <img src={patreonLogo} alt="חבקו את העץ בפטראון" />
                    <span>חבקו את העץ בפטראון</span>
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )}
        </ComingSoonModalProvider>
      </Container>
    </header>
  );
};

export default Header;

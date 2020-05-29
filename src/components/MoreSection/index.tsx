import React from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import { moreSectionTabs } from '../../constants/Home';
import './styles.scss';

export const MoreSection: React.FC<{}> = () => (
  <section className="moreSection">
    <Tab.Container defaultActiveKey={moreSectionTabs[0].key}>
      <div className="tabs">
        <Container>
          <Nav>
            {moreSectionTabs.map(({ key, title }) => (
              <Nav.Item>
                <Nav.Link eventKey={key}>{title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </div>
      <Tab.Content>
        {moreSectionTabs.map(({ key, text }) => (
          <Tab.Pane eventKey={key}>{text}</Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  </section>
);

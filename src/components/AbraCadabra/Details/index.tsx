import React, { FC } from 'react';

import EnrollNowButton from '../EnrollNowButton';
import { Title, Box } from '../styles';
import { Wrapper, Container, Boxes, TopBox, LeftBox, BottomBox, List, Leaf1 } from './styles';

const Details: FC = () => (
  <Wrapper>
    <Container>
      <Leaf1 />
      <TopBox>
        <Title bullets>THE DETAILS</Title>
      </TopBox>
      <Boxes>
        <LeftBox>
          <h3>WHAT'S INCLUDED</h3>
          <List>
            <li>
              <span>
                <strong>Real-time lessons.</strong> Eight live 75-minute lessons with Tami Zori via
                Zoom.
              </span>
            </li>
            <li>
              <span>
                <strong>Offline access.</strong> All lessons will be recorded and available for
                download to course participants.
              </span>
            </li>
            <li>
              <span>
                <strong>Community sharing.</strong> Additional opportunities to go deeper into
                conversation with other participants in a private Facebook group.
              </span>
            </li>
            <li>
              <span>
                <strong>Weekly practices.</strong> Writing prompts and activities to apply learnings
                to your everyday life.
              </span>
            </li>
            <li>
              <span>
                <strong>Bonus material.</strong> Participants will receive early access to three
                exclusive CityTree podcast episodes on witchcraft and ecology.
              </span>
            </li>
          </List>
        </LeftBox>
        <Box>
          <h3>HOW IT WORKS</h3>
          <p>
            Each Wednesday (19:00 Israel Standard Time/12pm US Eastern Time) we will meet online
            through Zoom, a free video conferencing platform. All lessons are live with Tami and
            will last 75 minutes.
            <br />
            <br />
            You can tune in through your desktop, laptop, phone, or tablet (any device that supports
            Zoom). All meetings will be recorded and will be available as a downloadable video file
            within a couple days for participant access.
            <br />
            <br />
            Additional conversation will occur in a community forum via a private Facebook group.
            <br />
            <br />
          </p>
          <h4>COURSE DATES</h4>
          <p>
            February 3-March 24 (Every Wednesday)
            <br />
            19:00-20:15 IST (12:00pm-1:15pm EST)
          </p>
          <EnrollNowButton />
        </Box>
      </Boxes>
      <BottomBox>
        <h3>IMPORTANT NOTE</h3>
        <p>
          While this course focuses on the divine Feminine and the embodied Woman as an archetype,
          it is open to persons of any identity and orientation. We speak to the Feminine as an
          aspect of spirit that we can (and must) all call into our own being to catalyze a
          much-needed revolution in our larger systems that restores sacred balance to the world.
        </p>
      </BottomBox>
    </Container>
  </Wrapper>
);

export default Details;

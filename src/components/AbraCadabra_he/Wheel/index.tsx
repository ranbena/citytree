import React, { FC } from 'react';
import SignUpButton from '../SignUpButton';

import { Wrapper, Container, Title, Box } from './styles';

const Wheel: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={6} sm={12} transparent>
        <Title>גלגל השנה של עץבעיר</Title>
        <div>
          <p>
            עץבעיר נולד ברוח החיבור המתחדש לטבע ולמקצבים והיסודות שלה. תמי צרי, מייסדת עץבעיר, נזכרה
            במחזור השנה הבסיסי, המשלב את מהות העונות והיסודות עם מחזורי השמש והלבנה, והבינה שגלגל
            השנה הוא מפת דרכים להתעוררות ההרמוניה בין היום יום שלנו ומחזורי הטבע.
          </p>
          <p>
            קורס הכישוף הוא עוד צעד במסע של תמי ושל עץבעיר בדרך אל אותה הרמוניה. במהלך הקורס נתייחס
            לנקודות בזמן שדרכן הקורס חולף: הירח והשמש, העונות והחגים - נתחבר מחדש למחזור הדם והלבנה,
            לרחם ולאינטואיציה - גם מי שאין לה רחם מחוברת, ומוזמנת למעגל : )
          </p>
        </div>
        <br />
        <SignUpButton />
      </Box>
    </Container>
  </Wrapper>
);

export default Wheel;

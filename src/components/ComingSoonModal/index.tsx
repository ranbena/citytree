import React from 'react';
import { githubProject, ranbenaPage, whatsappLink, tamiPhoneLink, PAGES } from 'src/constants';
import LeafContainer from '../LeafContainer';
import { Title, SubTitle, StyledModal, Developer, Top, Contact } from './styles';

export const ComingSoonModalProvider: React.FC<{
  locale?: 'en' | 'he';
  children: (show: (e: React.MouseEvent) => void) => React.ReactNode;
}> = ({ locale = 'he', children }) => {
  const [isVisible, setVisibility] = React.useState(false);
  const show = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setVisibility(true);
  }, []);
  const hide = React.useCallback(() => setVisibility(false), []);

  return (
    <>
      <StyledModal show={isVisible} onHide={hide} centered>
        <LeafContainer
          include={locale === 'he' ? 'left' : 'right'}
          excludeDefaultClassName
          opacity={0.6}
        >
          <StyledModal.Body>
            <Top>
              <Title>החלק הזה לא קיים עדיין באתר.</Title>
              <SubTitle>
                התוכן שעניין אותך לגמרי קיים במציאות שמחוץ לאתר - בפתקים ובמסמכים, במחשבות ובשיחות,
                בגינה או בבית!
                <br />
                על האתר אנחנו עובדות בקצב של נמלה - חרוצה, אבל קטנה קטנה,
                <br />
                וגם אוהבת לנוח וגם עסוקה בבית ובגינה, בחיים ובמשחק - ולא רק באתר.
                <br />
                יום אחד נגיע גם לדף הזה והוא יעלה. או שמשהו אחר לגמרי יקרה.
              </SubTitle>
              <Contact>
                בינתיים, אתם יכולים פשוט ליצור קשר ולבקש את המידע שעניין אתכן ממישהו אמיתי, (בתלת
                ממד!) -- {whatsappLink} (עינת, בוואטסאפ) / {tamiPhoneLink} (תמי)
              </Contact>
            </Top>
            <Developer>
              <h2>רגע!! אולי את/ה מפתח ווב? אולי תרצה/י לבוא לעבוד איתנו?</h2>
              <p>
                האתר כולו{' '}
                <a href={githubProject} target="_blank" rel="noopener noreferrer">
                  בקוד פתוח
                </a>
                , ואתן/ם יכולות ליצור קשר ישירות עם{' '}
                <a href={ranbenaPage} target="_blank" rel="noopener noreferrer">
                  המתכנת המתוק שלנו רן
                </a>
                .
                <br />
                או אולי בא לכן לקרוא על ״תיאור התפקיד״ ו״תנאי ההעסקה״ בעץ, כאן:{' '}
                <a href={PAGES.employment} target="_blank" rel="noopener noreferrer">
                  מגורים תמורת עבודה
                </a>
                .
              </p>
            </Developer>
          </StyledModal.Body>
        </LeafContainer>
      </StyledModal>
      {children(show)}
    </>
  );
};

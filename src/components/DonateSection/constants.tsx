import React from 'react';
import { IInvitation, IDonate } from './types';
import ezpayImage from '../../images/ezpay.png';
import bitpayImage from '../../images/bitpay.png';
import paypalImage from '../../images/paypal.svg';
import patreonImage from '../../images/patreon.png';

export const Invitation: IInvitation = {
  title1: 'אנחנו מזמינים אותך להיות פטרונית או פטרון שלנו!',
  text1: (
    <>
      אין לעץ קיום ללא הקהילה שסביבו – החקלאים שמהם אנחנו קונים את האוכל שלנו,
      המורות והמורים שאנחנו לומדות מהן לאורך השנים, המבקרות בעץ שנהנות מפירותיו
      וכל מי שמגיעה ללמוד, לחיות ולעבוד איתנו. הפעילות שלנו מבוססת במהותה על
      השתתפות פעילה של החברים והחברות השותפות לדרך ומערכות יחסים מורכבות. מתן
      זמן ומתן כסף הם שתי דרכים יפות וטובות להשתתף. במערכת הכלכלית הקיימת, כספים
      שמגיעים מחברות וחברים שרוצים לראות את עץבעיר משגשג וממשיך להועיל לסביבתו,
      הם נדבך הכרחי לעצם קיומנו.
      <br />
      <br />
      האם הגיע הזמן שבו אפשר כבר לבנות פרנסה מהידע על &quot;איך לחיות בעיר&quot;
      שפיתחנו והעמקנו שנים כה רבות? אין לנו ספק שכן. בימים של אחרי קורונה
      המודעות והצורך בידע הזה עלתה. מצד שני, היכולת לשלם עבורו נפגעה קשות. אנחנו
      מאמינות שאנחנו מפיצות מידע ייחודי, מציל חיים ורלוונטי יותר מתמיד, ידע
      שחיוני, כמובן, גם לא&apos;נשים שמתקשים להתפרנס. אנו רוצות להמשיך ליצור,
      ללמוד, לחקור, ללמד ולהפיץ להפיץ להפיץ, ולשם כך אנחנו קוראות לכן ולכם
      להיכנס למעגל הפטרונים והפטרוניות שלנו.
      <br />
      <br />
      כל תרומה עוזרת לנו להגיע לעוד א&apos;נשים, לשנות עוד משקי בית, להזיז עוד
      ברגים בראשים. אנא היכנסו לעמוד של עץבעיר בפטריון והצטרפו בתשלום חודשי
      קבוע; כך תתמכו בהמשך המחקר והפצת הידע ותקבלו הצצות מיוחדות לשלבי הפיתוח של
      סרטונים, חבילות תוכן, מדריכים ומוצרים חדשים.
    </>
  ),
  title2: 'מידע מיוחד עבור הפטרונים והפטרוניות של עץבעיר',
  text2: (
    <>
      יש פרויקטים נסיוניים ששעתם לחשיפה רחבה עדיין לא הגיעה, אם בגלל שהניסיון
      נדמה רדיקלי או איזוטרי מידי לעת עתה, ואם בגלל שאנחנו עדיין בשלבי הפיתוח
      הראשוניים ולא בטוחים לגבי הניסוח, ה&quot;מתכון&quot; או התוצאה. כאן בדיוק
      ניכנסים החברים והחברות שמאמינים בנו ובדרכינו. איתן נוח לנו לשתף בתהליך,
      ומהן נירצה לקבל משוב כנה לאורך הדרך. ממניפסט חדש שכתבנו, ועד מערכת מהפכנית
      לטיפול בפסולת אנושית באמצע העיר - הביעו את האמון שלכן במתן תרומה חודשית
      לעץבעיר והיכנסו למעגל &quot;יודעי הדבר&quot; שלנו!
    </>
  ),
};

export const Donate: IDonate = {
  title: 'כל הדרכים לתרום לעץ',
  subtitle: 'עץבעיר מזמין אותך לתמוך בעשייה של כל מי שפועלת בתחומיו',
  patreon: {
    title: 'היו פטרונים',
    linkUrl: 'https://www.patreon.com/bePatron?u=14804636',
    imageUrl: patreonImage,
    text: <>או מתן תרומה חודשית לעץבעיר</>,
  },
  buttons: [
    {
      title: 'ביט',
      linkUrl: '#',
      imageUrl: bitpayImage,
      disabled: true,
    },
    {
      title: 'פייפאל',
      linkUrl: 'https://www.paypal.me/citytree',
      imageUrl: paypalImage,
      maxHeight: 20,
    },
    {
      title: 'איזיפיי',
      linkUrl: 'https://www.ezpay.co.il/Payment.aspx?id=13295',
      imageUrl: ezpayImage,
    },
  ],
};

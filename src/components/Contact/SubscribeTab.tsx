import React from 'react';
import { anchor } from 'src/utils';

const SubscribeTab: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="subscribe-tab-wrapper">
    <div className="subscribe-tab">
      <div className="subscribe-tab-content" onClick={anchor('contact')}>
        הרשמה לרשימת התפוצה
      </div>
    </div>
    {children}
  </div>
);

export default SubscribeTab;

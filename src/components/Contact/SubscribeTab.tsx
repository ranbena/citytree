/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { anchor } from 'src/utils';

const SubscribeTab: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const intl = useIntl();

  return (
    <div className="subscribe-tab-wrapper">
      <div className="subscribe-tab">
        <div className="subscribe-tab-content" onClick={anchor(intl, 'contact')}>
          <FormattedMessage id="contact.newsletter.title" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default SubscribeTab;

import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const Subscribe: React.FC = () => {
  const el = React.useRef(null);
  const { formatMessage } = useIntl();

  const formId = formatMessage({ id: 'newsletter.formId' });
  const dataFormId = formatMessage({ id: 'newsletter.dataFormId' });
  const direction = formatMessage({ id: 'direction' });

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.creaditor.com/formCreator/assets/fc-basics.min.js';
    el.current.appendChild(script);
  }, []);

  return (
    <div className="subscribe">
      <div
        ref={el}
        className={`fc-form form_${formId} type-vertical ${direction}`}
        data-form-id={dataFormId}
        data-smart="true"
        style={{ width: 433, height: 300, margin: 'auto' }}
      />
    </div>
  );
};

export default Subscribe;

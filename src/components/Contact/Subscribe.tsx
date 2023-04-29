import React from 'react';

const Subscribe: React.FC<{ locale?: 'he' | 'en' }> = ({ locale = 'he' }) => {
  const el = React.useRef(null);

  const formId = locale === 'he' ? '319791' : '320972';
  const dataFormId =
    locale === 'he'
      ? '319791-d7566b30-480e-6db7-e9b4-dbabe2e71da9-22'
      : '320972-f7e9df9b-57fe-d3e8-79fc-84250bda7b07-22';
  const direction = locale === 'he' ? 'rtl' : 'ltr';

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

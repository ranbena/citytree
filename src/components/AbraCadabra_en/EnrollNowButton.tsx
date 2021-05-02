import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from './styles';

const enrollFormUrl = 'https://liana345201.typeform.com/to/B0f3OT5m';

const EnrollNowButton: FC = () => {
  const openForm = () => {
    const { typeformEmbed } = window as any;
    if (typeformEmbed) {
      typeformEmbed.makePopup(enrollFormUrl, {
        mode: 'popup',
        autoOpen: true,
      });
    } else {
      window.open('x', enrollFormUrl);
    }
  };

  return (
    <>
      <Helmet>
        <script src="https://embed.typeform.com/embed.js" />
      </Helmet>
      <Button onClick={openForm}>Enroll now</Button>
    </>
  );
};

export default EnrollNowButton;

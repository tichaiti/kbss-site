import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../Navbar";
import Divider from "../Divider";
import Footer from "../Footer";

export default function Layout({children}) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navbar
        color="primary"
        spaced={true}
        logo="https://kbss.s3.amazonaws.com/kbss-Icon.png"
      />

      {children}

      <Divider color="light" />
      <Footer
        color="light"
        size="medium"
        logo="https://kbss.s3.amazonaws.com/kbss-Icon.png"
        description={t('mission_desc')}
        copyright={t('site_name')}
      />
    </>
  );
}
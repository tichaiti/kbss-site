import React from "react";
import { useTranslation } from 'react-i18next';
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title={t('site_name')}
        subtitle={t('getting_started')}
        buttonText={t('support_cta')}
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ClientsSection
        color="light"
        size="medium"
        title="Our partners along the way"
        subtitle=""
      />
      <TestimonialsSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title={t('help_cta')}
        subtitle=""
        buttonText={t('contribute')}
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default IndexPage;

import React from "react";
import App from "next/app";
import { I18nextProvider } from 'react-i18next';
import Layout from '../components/layouts/Layout';
import { ProvideAuth } from "./../util/auth.js";
import i18n from '../util/i18n';
import "./../util/analytics.js";
import "./../styles/global.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ProvideAuth>
        <I18nextProvider i18n={i18n}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </I18nextProvider>
      </ProvideAuth>
    );
  }
}

export default MyApp;

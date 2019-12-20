import React from 'react';
import ContactSection from './../components/ContactSection';

function ContactPage(props) {
  return (
    <ContactSection
      color='white'
      size='medium'
      title='CONNECT WITH US'
      subtitle=''
      showNameField={true}
      buttonText='Send'
      intro='Feel free to get in touch with us! We can talk with you in English, French, and Creole.'
      haitiPhone='+ 509 38448172 (Haiti)'
      usPhone='+1 609 933 5945 (USA)'
      streetAddress='Place Fierte,'
      cityAndCountry='Cite Soleil, Haiti'
      email='kbsscitesoleil@gmail.com'
    />
  );
}

export default ContactPage;

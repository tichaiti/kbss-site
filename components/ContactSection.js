import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Contact from './Contact';
import ContactInfo from './ContactInfo';
import './ContactSection.scss';

function ContactSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className='ContactSection__container container'>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />

        <div className='intro-and-form'>
          <div className='info'>
            <ContactInfo
              intro={props.intro}
              haitiPhone={props.haitiPhone}
              usPhone={props.usPhone}
              streetAddress={props.streetAddress}
              cityAndCountry={props.cityAndCountry}
              email={props.email}
            />
          </div>

          <Contact
            parentColor={props.color}
            showNameField={props.showNameField}
            buttonText={props.buttonText}
          />
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;

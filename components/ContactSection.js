import React from "react";
import dynamic from 'next/dynamic';

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact";
import ContactInfo from "./ContactInfo";
import "./ContactSection.scss";

const KBSSMap = dynamic(
  () => import('../components/Map'),
  { ssr: false }
);

function ContactSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="ContactSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Contact
          parentColor={props.color}
          showNameField={props.showNameField}
          buttonText={props.buttonText}
        />
        <KBSSMap />
        <ContactInfo />
      </div>
    </Section>
  );
}

export default ContactSection;

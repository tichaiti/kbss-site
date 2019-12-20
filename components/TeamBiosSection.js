import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

const people = [
  {
    avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
    name: "John Smith",
    role: "Software Engineer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    twitterUrl: "https://twitter.com",
    facebookUrl: "https://facebook.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
    name: "Lisa Zinn",
    role: "Software Engineer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
    twitterUrl: "https://twitter.com",
    facebookUrl: "https://facebook.com",
    linkedinUrl: "https://linkedin.com"
  },
  {
    avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
    name: "Diana Low",
    role: "Designer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
    twitterUrl: "https://twitter.com",
    facebookUrl: "https://facebook.com",
    linkedinUrl: "https://linkedin.com"
  }
];

function TeamBiosSection({color, size, title, subtitle}) {
  return (
    <Section color={color} size={size}>
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={3}
        />
        <TeamBios people={people} />
      </div>
    </Section>
  );
}

export default TeamBiosSection;

import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Card>
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Watch",
                body:
                  "Netflix-like Media Hub for your favorite shows",
                image:
                  "https://res.cloudinary.com/dexdumfqy/image/upload/v1598156489/mack.network/netflix-tv-screen-sm_h3a4p7.jpg",
              },
              {
                title: "Cloud",
                body:
                  "Personal Cloud Storage on all of your devices",
                image:
                  "https://res.cloudinary.com/dexdumfqy/image/upload/v1598156485/mack.network/Firm-Central-Cloud_kbhhxm.png",
              },
              {
                title: "More",
                body:
                  "And more to come, when I can get around to it",
                image:
                  "https://res.cloudinary.com/dexdumfqy/image/upload/v1598156493/mack.network/predictions-for-cloud-in-2020-800x450_zm1uwa.jpg",
              },
            ]}
          ></Features>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;

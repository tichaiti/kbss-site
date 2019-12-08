import React from "react";
import styled from '@emotion/styled';
import BackgroundImage from "./BackgroundImage";
import { isClass as is } from '../util';


const Container = styled.section`
  &.is-white  {
    border-top: 1px solid #F0F0F0;
  }
`;

function Section({ 
  color, 
  size, 
  backgroundImage, 
  backgroundImageOpacity, 
  children, 
  ...props}) {
  const classes = `ContainerComponent hero section is-block is-relative ${is(color)} ${is(size)}` 

  return (
    <Container className={classes} {...props}>
      {backgroundImage && (
        <BackgroundImage 
          image={backgroundImage} 
          opacity={backgroundImageOpacity} />
      )}

      {children}
    </Container>
  );
}

export default Section;

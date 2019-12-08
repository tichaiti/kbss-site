import React from "react";
import styled from '@emotion/styled';
// import "./BackgroundImage.scss";

const BackgroundImage = styled.div(props => `
  content: "";
  background-image: url(${props.image});
  background-position: center center;
  background-size: cover;
  opacity: ${props.opacity};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 0;
`);

export default BackgroundImage;

// function BackgroundImage(props) {
//   return (
//     <div
//       className="BackgroundImage"
//       style={{
//         "--image": `url(${props.image})`,
//         "--opacity": props.opacity
//       }}
//     />
//   );
// }

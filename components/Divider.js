import React from "react";
import styled from '@emotion/styled';


const Line = styled.div`
  width: 100%;
  height: 1px;
`;

const Divider = props => 
  <Line className={`has-background-${props.color}`} />

export default Divider;

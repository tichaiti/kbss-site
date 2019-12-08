import React from "react";
import { isClass as is } from '../util';

const colors = [ "primary", "info", "success", "warning", "danger", "black", "dark" ];
function SectionButton({ 
  parentColor, 
  size, 
  state, 
  fullWidth, 
  children, 
  ...props}) {  

  const color = colors.includes(parentColor) 
    && `${is(parentColor)} is-inverted`;

  const shade = ["white", "light"].includes(parentColor) 
    || !parentColor && "is-primary";
    
  const classes = [
    'button', 
    color, 
    shade, 
    is(size), 
    is(color), 
    (fullWidth && 'is-fullwidth')
  ].join(' ');

  return (
    <button className={classes} {...props} >
      {children}
    </button>
  );
}

export default SectionButton;

import React from 'react';
import './ContactSection.scss';
import './ContactInfo.scss';

function ContactInfo(props) {
  console.log(props.haitiPhone);
  return (
    <div>
      <div>{props.intro}</div>

      <div className='phone-info'>
        <div>
          <i className='fas fa-phone'> </i>
        </div>
        <div>
          {props.haitiPhone} <br />
          {props.usPhone}
        </div>
      </div>
      <div className='location'>
        <div>
          <i className='fas fa-map-marker-alt'> </i>
        </div>
        <div>
          {props.streetAddress} <br />
          {props.cityAndCountry}
        </div>
        <div></div>
      </div>
      <div className='email'>
        <div>
          <i className='fas fa-envelope'> </i>
        </div>
        <div>{props.email}</div>
      </div>
    </div>
  );
}
export default ContactInfo;

import React from 'react';

function ContactInfo(props) {
    return (
      <div className="contact-info">
        <p>Feel free to get in touch with us! <br/>We can talk with you in English, French, and Creole.</p>
        <div className="contact-info__section">
          <i class="fas fa-phone-alt"></i>
          <div className="contact-info__detail">
            <p>+509 38448172 (Haiti)</p>
            <p>+1 609 933 5945 (USA)</p>
          </div>
        </div>
  
        <div className="contact-info__section">
          <i class="fas fa-map-marker-alt"></i>
          <div className="contact-info__detail">
            <p>Place Fierte,</p>
            <p>Cite Soleil, Haiti</p>
          </div>
        </div>
  
        <div className="contact-info__section">
          <i class="fas fa-envelope"></i>
          <div className="contact-info__detail">
            <p>kbsscitesoleil@gmail.com</p>
          </div>
        </div>
      </div>
    );
}

export default ContactInfo;
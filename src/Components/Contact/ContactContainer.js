import React, { Component } from 'react';
import ContactForm from './ContactForm'
import SocialBar from './SocialBar'
import '../../CSS/ContactContainer.css';

class ContactContainer extends Component {
  render() {
    return (
      <div className="contact-container">
        <ContactForm />
        <SocialBar />
      </div>
    );
  }
}

export default ContactContainer;

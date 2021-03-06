import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ContactForm from './ContactForm'
import SocialBar from './SocialBar'
import '../../CSS/ContactContainer.css';

class ContactContainer extends Component {
  render() {
    return (
      <div className="contact-container">
        <ScrollableAnchor id="contact-section">
          <ContactForm />

        </ScrollableAnchor>
        <SocialBar />
      </div>
    );
  }
}

export default ContactContainer;

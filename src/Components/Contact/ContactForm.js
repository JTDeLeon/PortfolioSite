import React, { Component } from 'react';
import '../../CSS/ContactForm.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <h3 id="contact-title">Contact Me</h3>
          <label for="name-field">Name: </label><br/>
          <input id="name-field" placeholder="Name (Required)"></input>
          <br/><br/>
          <label for="email-field">Email Address: </label><br/>
          <input id="email-field" placeholder="Email (Required)"></input>
          <br/><br/>
          <label for="message-area">Message: </label><br/>
          <textarea id="message-area"></textarea>
          <br/>
          <button id="contact-btn" src="#">Contact Me</button>
        </form>

      </div>
    );
  }
}

export default ContactForm;

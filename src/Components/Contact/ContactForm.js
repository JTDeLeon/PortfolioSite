import React, { Component } from 'react';
import '../../CSS/ContactForm.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <h3>Contact Me</h3>
          <label for="name-field">Name: </label>
          <input id="name-field" placeholder="Name (Required)"></input>
          <br/>
          <label for="email-field">Email Address: </label>
          <input id="email-field" placeholder="Email (Required)"></input>
          <br/>
          <label for="message-area">Message: </label>
          <textarea id="message-area"></textarea>
          <br/>
          <button>Contact Me</button>
        </form>

      </div>
    );
  }
}

export default ContactForm;

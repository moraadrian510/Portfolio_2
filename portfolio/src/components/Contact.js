import React from "react";


function Contact() {
  return (
    <div className="contact-form-container">
      <div className="contact-text">Contact Me</div>
      
      <form className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

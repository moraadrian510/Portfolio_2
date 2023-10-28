import React, { useRef } from "react";
import emailjs from "@emailjs/browser"


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wi99hip', 'template_gia5vva', form.current, 'hz2zDXRAQScEM3sua')
      .then((result) => {
          console.log(result.text);
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-text">Contact Me</div>
      
      <form ref={form} onSubmit={sendEmail}className="contact-form" >
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button className="submit-button" type="submit" value="send" >Submit</button>
      </form>
    </div>
  );
}

export default Contact;



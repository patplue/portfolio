import React from "react";
import "./Contact.css";

import ContactForm from "./Components/ContactForm";
import ContactLinks from "./Components/ContactLinks";

const Contact = () => {
  return (
    <div id="Contact">
      <hr />
      <h1>Contact</h1>
      <div className="contact-form-container">
        <ContactForm />
      </div>
      <div className="contact-link-container">
        <ContactLinks />
      </div>
    </div>
  );
};

export default Contact;

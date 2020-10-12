import React from "react";
import "./Contact.css";

import ContactForm from "./Components/ContactForm";

const Contact = () => {
  return (
    <div id="Contact">
      <h1>Contact</h1>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

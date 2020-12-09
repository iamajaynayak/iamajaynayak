import React from "react";
import "./contact.css";

import SocialMedia from "../../Components/SocialMedia/SocialMedia.js";
import EmailContact from "../../Components/EmailContact/EmailContact.js";

const ContactPage = () => (
  <div className="contact-holder">
    <SocialMedia />
    <EmailContact />
  </div>
);

export default ContactPage;

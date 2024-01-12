import React from "react";
import "./style.css";

export const ContactUsHeader = (): JSX.Element => {
  return (
    <div className="contact-us-header">
      <div className="container">
        <p className="short-heading-here">Get in touch with us now</p>
        <p className="lorem-ipsum-dolor">
          We&#39;re here to help. Send us a message and we&#39;ll get back to
          you soon.
        </p>
      </div>
    </div>
  );
};

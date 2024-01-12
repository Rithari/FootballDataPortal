import React, { useState } from "react";
import "./style.css";

export const ContactForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(e.target.checked);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (termsAgreed) {
      // Here you would typically send the data to a server
      console.log(formData); // Logging out the form data
      setFormSubmitted(true);
      // Reset form fields if needed
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please agree to the Terms");
    }
  };

  return (
    <div className="contact-form">
      <div className="section-title">
        <div className="tagline">Get in touch</div>
        <div className="content">
          <div className="heading">Contact us</div>
        </div>
      </div>
      <div className="form">
        <div className="input">
          <div className="text-wrapper">Name</div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="type-default"
          />
        </div>
        <div className="input">
          <div className="text-wrapper">Email</div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="type-default"
          />
        </div>
        <div className="input">
          <div className="text-wrapper">Message</div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="text-area"
            placeholder="Type your message..."
          />
        </div>
        <div
          className="selected-false"
          onClick={() => setTermsAgreed(!termsAgreed)}
        >
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={handleCheckboxChange}
          />
          <p className="label">I agree to the Terms</p>
        </div>
        <div className="style-primary-small">
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {formSubmitted && (
          <p>Thank you for your submission. We will be in touch soon!</p>
        )}
      </div>
    </div>
  );
};

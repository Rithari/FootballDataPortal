import React, { useState } from "react";
import "./style.css";

export const NewsletterCTA2 = (): JSX.Element => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (formSubmitted) {
      setFormSubmitted(false);
    }
    if (signupSuccess) {
      setSignupSuccess(false);
    }
    if (emailError) {
      setEmailError("");
    }
  };

  const handleSignUp = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setFormSubmitted(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      setSignupSuccess(false);
    } else {
      setEmailError("");
      setEmail("");
      setSignupSuccess(true);
    }
  };

  return (
    <div className="newsletter">
      <div className="container">
        <div className="content">
          <p className="heading">Get the Latest News Here</p>
          <p className="text">Stay updated with our newsletter</p>
        </div>
        <div className="actions">
          {!signupSuccess && (
            <div className="form">
              <div className="type-default">
                <input
                  className="email-text-box"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  aria-describedby="emailError"
                  placeholder="Enter your email"
                />
                {formSubmitted && emailError && (
                  <p id="emailError" className="email-error">
                    {emailError}
                  </p>
                )}
              </div>
              <button className="style-primary-small" onClick={handleSignUp}>
                <span className="button">Sign Up</span>
              </button>
            </div>
          )}
          <p className="by-clicking-sign-up">
            {signupSuccess
              ? "Thank you for signing up!"
              : "Stay informed with the latest news and updates. Sign up today!"}
          </p>
        </div>
      </div>
    </div>
  );
};

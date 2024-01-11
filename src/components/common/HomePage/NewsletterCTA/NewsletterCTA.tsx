import React, { useState } from "react";
import "./style.css";

export const NewsletterCTA = (): JSX.Element => {
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
      setSignupSuccess(false); // Reset the success message if user modifies the email
    }
    if (emailError) {
      setEmailError(""); // Clear error message when the user starts typing
    }
  };

  function handleSignUp(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    if (!formSubmitted) {
      setFormSubmitted(true);
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      setSignupSuccess(false); // Ensure success message isn't shown if there's an error
    } else {
      setEmailError("");
      setEmail(""); // Clear the email input on successful signup
      setSignupSuccess(true); // Set the success state to true
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <div className="newsletter-CTA">
      <div className="column">
        <div className="content">
          <p className="heading">Stay Updated with Our Newsletter</p>
          {signupSuccess ? ( // Conditional rendering based on signupSuccess
            <p className="text-success">Thank you for signing up!</p>
          ) : (
            <p className="text">
              Get the latest updates and news by subscribing to our newsletter.
            </p>
          )}
        </div>
        <div className="actions">
          {!signupSuccess && ( // Hide the form if signup is successful
            <div className="form">
              <div className="type-default">
                <div className="email-input-container">
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
              </div>
              <div className="style-primary-small">
                <button className="button" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          )}
          <p className="by-clicking-sign-up">
            By clicking Sign Up, you confirm that you agree with our Terms and
            Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

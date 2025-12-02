import React, { useState } from "react";
import "./Join.css";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="join-page">
      {/* Header */}
      <section className="join-header">
        <h1 className="join-title">Join the Movement</h1>
        <p className="join-subtitle">
          Whether you’re a volunteer, donor, or food partner - you can make an
          impact.
        </p>
      </section>

      {/* Form Section */}
      <section className="join-form-section">
        <div className="join-form-container">
          <h2 className="join-form-title">Sign Up to Get Involved</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select required>
                  <option value="">Select one...</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="donor">Donor</option>
                  <option value="partner">Food Partner</option>
                </select>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          ) : (
            <div className="thank-you-message">
              Thank you for joining! We’ll reach out soon.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

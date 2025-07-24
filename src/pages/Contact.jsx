import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have questions, ideas, or just want to get in touch? We’d love to hear
          from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Form */}
          <div className="contact-form-card">
            <h2 className="contact-form-heading">Send a Message</h2>

            {!sent ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" required className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea rows="5" required className="form-input"></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send
                </button>
              </form>
            ) : (
              <div className="form-success">
                Thanks! We’ll get back to you shortly.
              </div>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-form-heading">Contact Info</h2>
            <p>
              <strong>Email:</strong> contact@refood.org
            </p>
            <p>
              <strong>Phone:</strong> +91 1234567890
            </p>
            <p>
              <strong>Address:</strong> 123 Community Drive, Green City, Earth
            </p>

            <h3 className="contact-social-heading">Follow Us</h3>
            <div className="contact-social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

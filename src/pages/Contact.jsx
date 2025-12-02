import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous error

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mqajdbaz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      setLoading(false);

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to send message. Check your internet connection.");
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have questions, ideas, or just want to get in touch? We’d love to hear
          from you.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-form-card">
            <h2 className="contact-form-heading">Send a Message</h2>

            {!sent ? (
              <form onSubmit={handleSubmit} className="contact-form">
                {error && <div className="form-error">{error}</div>}

                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    className="form-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            ) : (
              <div className="form-success">
                Thanks! We’ll get back to you shortly.
              </div>
            )}
          </div>

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

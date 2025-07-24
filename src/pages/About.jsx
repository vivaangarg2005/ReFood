import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About ReFood</h1>
          <p className="about-subtitle">
            Learn about our mission, our team, and how we’re creating a more
            sustainable, hunger-free world.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section story-section">
        <div className="about-content">
          <h2 className="section-heading">Our Story</h2>
          <p className="section-paragraph">
            ReFood started with a simple idea — that good food should never go
            to waste while people go hungry. What began as a community effort
            has grown into a national initiative connecting food donors,
            volunteers, and those in need.
          </p>
          <p className="section-paragraph">
            We believe in the power of collaboration, innovation, and compassion
            to transform our food systems and strengthen local communities.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section values-section">
        <div className="about-content">
          <h2 className="section-heading center">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">Sustainability</h3>
              <p className="value-text">
                Reducing food waste and preserving resources for future
                generations.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Equity</h3>
              <p className="value-text">
                Ensuring access to nutritious food for all — regardless of
                income or status.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Community</h3>
              <p className="value-text">
                Bringing people together to create resilient, empowered local
                networks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

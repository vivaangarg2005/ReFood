import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">ReFood: Rescuing Food, Reviving Lives</h1>
        <p className="hero-subtitle">
          A sustainable solution to food waste and hunger. Join the mission to
          feed communities and protect the planet.
        </p>
        <Link to="/join" className="hero-button">
          Get Involved
        </Link>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Every year, tons of perfectly edible food goes to waste. Meanwhile,
          millions face hunger daily. ReFood bridges this gap - collecting
          surplus food and delivering it to those in need. Our mission is to
          ensure that no good food goes to waste while nourishing communities.
        </p>
      </section>
    </div>
  );
}

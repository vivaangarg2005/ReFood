import React from "react";
import "./Impact.css";

export default function Impact() {
  const stats = [
    { label: "Meals Delivered", value: "1,250,000+" },
    { label: "Volunteers", value: "3,400+" },
    { label: "Partner Locations", value: "220+" },
    { label: "Food Waste Prevented", value: "950 tons" },
  ];

  const stories = [
    {
      name: "City Shelter",
      quote:
        "Thanks to ReFood, we've been able to provide consistent, healthy meals to those who depend on us. It's made a real difference.",
    },
    {
      name: "Maria, Volunteer",
      quote:
        "Volunteering with ReFood gave me purpose. I see the faces of the people we help - and it’s incredibly fulfilling.",
    },
  ];

  return (
    <div className="impact-page">
      {/* Header */}
      <section className="impact-header">
        <h1 className="impact-title">Our Impact</h1>
        <p className="impact-subtitle">
          From tons of food rescued to thousands of lives touched - your support
          drives our mission forward.
        </p>
      </section>

      {/* Stats Section */}
      <section className="impact-stats">
        <div className="impact-stats-container">
          <h2 className="impact-stats-title">By the Numbers</h2>
          <div className="impact-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="impact-stat-card">
                <p className="impact-stat-value">{stat.value}</p>
                <p className="impact-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="impact-testimonials">
        <div className="impact-testimonials-container">
          <h2 className="impact-testimonials-title">Voices of Impact</h2>
          <div className="impact-testimonial-grid">
            {stories.map((story, index) => (
              <div key={index} className="impact-testimonial-card">
                <p className="impact-testimonial-quote">“{story.quote}”</p>
                <p className="impact-testimonial-name">- {story.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

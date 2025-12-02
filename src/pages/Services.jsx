import React from "react";
import { Truck, Warehouse, HelpingHand, AlarmClock } from "lucide-react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Food Collection",
      icon: <Warehouse className="service-icon" />,
      description:
        "We collect surplus food from restaurants, grocery stores, farms, and events - safely and efficiently.",
    },
    {
      title: "Sorting & Storage",
      icon: <AlarmClock className="service-icon" />,
      description:
        "All food is sorted and stored in compliance with food safety standards before distribution.",
    },
    {
      title: "Volunteer Network",
      icon: <HelpingHand className="service-icon" />,
      description:
        "Our volunteers form the heart of the operation - managing pickups, packaging, and delivery.",
    },
    {
      title: "Last-Mile Delivery",
      icon: <Truck className="service-icon" />,
      description:
        "We deliver rescued food to shelters, food banks, and directly to families in need.",
    },
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <section className="services-header">
        <div className="services-header-container">
          <h1 className="services-title">How It Works</h1>
          <p className="services-subtitle">
            Our system is designed to make food rescue fast, safe, and
            community-powered - from pickup to plate.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          <h2 className="services-grid-title">What We Do</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                {service.icon}
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

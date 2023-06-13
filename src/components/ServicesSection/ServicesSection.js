import React from "react";
import "./ServicesSection.scss";
import { FaStar } from "react-icons/fa";

const servicesList = [
  {
    service_title: "Development & IT",
    service_rating: 4.85,
    service_skills: 1853,
  },
  {
    service_title: "AI Services",
    service_rating: 4.8,
    service_skills: 294,
  },
  {
    service_title: "Design & Creative",
    service_rating: 4.91,
    service_skills: 968,
  },
  {
    service_title: "Sales & Marketing",
    service_rating: 4.77,
    service_skills: 392,
  },
  {
    service_title: "Writing & Translation",
    service_rating: 4.92,
    service_skills: 505,
  },
  {
    service_title: "Admin & Customer Support",
    service_rating: 4.77,
    service_skills: 508,
  },
  {
    service_title: "Finance & Accounting",
    service_rating: 4.79,
    service_skills: 214,
  },
  {
    service_title: "Engineering & Architecture",
    service_rating: 4.85,
    service_skills: 650,
  },
];
const ServiceCard = ({serviceData}) => {
  return (
    <div className="service-card">
      <h3 className="service-title">{serviceData.service_title}</h3>
      <div className="service-rating">
        <FaStar className="rating-star-icon" /> {serviceData.service_rating}/5
      </div>
      <div className="service-skills">{serviceData.service_skills} skills</div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-heading">Explore Our Services</h2>
        <p className="section-subheading">Browse talent by category</p>
        <div className="services-grid">
          {servicesList?.map((service, i) => (
            <ServiceCard key={i} serviceData={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

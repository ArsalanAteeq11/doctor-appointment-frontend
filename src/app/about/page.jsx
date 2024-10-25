import React from "react";
import "./about.css";

const page = () => {
  return (
    <div className="container">
      <section className="about-us">
        <h1>
          About <span>Us</span>
        </h1>
        <div className="about-content">
          <img src="/assets/assets_frontend/about_image.png" alt="" />
          <div className="about-text">
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>
            <h3>Our Vision</h3>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <h2>
          Why <span>Choose Us</span>
        </h2>
        <div className="features">
          <div className="feature">
            <h3>Efficiency:</h3>
            <p>
              Streamlined appointment scheduling that fits your busy lifestyle.
            </p>
          </div>
          <div className="feature">
            <h3>Convenience:</h3>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="feature">
            <h3>Personalization:</h3>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

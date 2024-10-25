import React from "react";
import "./contact.css";

const page = () => {
  return (
    <div>
      <section className="contact-us">
        <h1>
          Contact <span>Us</span>
        </h1>
        <div className="contact-content">
          <img src="/assets/assets_frontend/contact_image.png" alt="" />
          <div className="contact-details">
            <h3>Our Office</h3>
            <p>
              54709 Wilms Station
              <br />
              Suite 130, Washington, USA
            </p>
            <p>
              Tel: (415) 555-0132 <br /> Email: greatstock4ev@gmail.com
            </p>
            <h3>Careers at Prescripto</h3>
            <p>Learn more about our teams and job openings.</p>
            <button className="explore-jobs">Explore Jobs</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

import "./callToAction.css";
const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h2>Book Appointment With 100+ Trusted Doctors</h2>
        <button className="btn-create-account">Create Account</button>
      </div>
      <div className="appointment_img">
        <img src="/assets/assets_frontend/appointment_img.png" alt="" />
      </div>
    </div>
  );
};

export default CallToAction;

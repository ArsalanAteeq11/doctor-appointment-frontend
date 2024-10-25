import "./appointment.css";

const page = () => {
  return (
    <div className="container">
      <h1>My Appointments</h1>
      <div className="appointmentContainer">
        <hr />
        <div className="appointmentsDetail">
          <div className="appointmentContent">
            <img src="/assets/assets_frontend/doc1.png" alt="" />
            <div className="doctorDetails">
              <h2>Dr. Richard James</h2>
              <p>General physician</p>
              <span>Address:</span>
              <p>
                57th Cross, Richmond <br /> Circle, Church Road, London
              </p>
              <p>Date & Time: 25, July, 2024 | 8:30 PM</p>
            </div>
          </div>
          <div className="btnCont">
            <button className="status">Pay here</button>
            <button className="cancelBtn">Cancel appointment</button>
          </div>
        </div>
      </div>
      <div className="appointmentContainer">
        <hr />
        <div className="appointmentsDetail">
          <div className="appointmentContent">
            <img src="/assets/assets_frontend/doc1.png" alt="" />
            <div className="doctorDetails">
              <h2>Dr. Richard James</h2>
              <p>General physician</p>
              <span>Address:</span>
              <p>
                57th Cross, Richmond <br /> Circle, Church Road, London
              </p>
              <p>Date & Time: 25, July, 2024 | 8:30 PM</p>
            </div>
          </div>
          <div className="btnCont">
            <button className="status">Pay here</button>
            <button className="cancelBtn">Cancel appointment</button>
          </div>
        </div>
      </div>
      <div className="appointmentContainer">
        <hr />
        <div className="appointmentsDetail">
          <div className="appointmentContent">
            <img src="/assets/assets_frontend/doc1.png" alt="" />
            <div className="doctorDetails">
              <h2>Dr. Richard James</h2>
              <p>General physician</p>
              <span>Address:</span>
              <p>
                57th Cross, Richmond <br /> Circle, Church Road, London
              </p>
              <p>Date & Time: 25, July, 2024 | 8:30 PM</p>
            </div>
          </div>
          <div className="btnCont">
            <button className="status">Pay here</button>
            <button className="cancelBtn">Cancel appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

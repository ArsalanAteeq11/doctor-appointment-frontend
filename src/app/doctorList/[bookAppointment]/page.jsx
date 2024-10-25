"use client";
import "./style.css";

const bookingSlots = [
  {
    day: "mon",
    Date: "10",
  },
  {
    day: "tue",
    Date: "11",
  },
  {
    day: "wed",
    Date: "12",
  },
  {
    day: "thu",
    Date: "13",
  },
  {
    day: "fri",
    Date: "14",
  },
  {
    day: "sat",
    Date: "15",
  },
  {
    day: "sun",
    Date: "16",
  },
];
const doctors = [
  {
    id: 1,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc1.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 2,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc2.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 3,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc3.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 4,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc4.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 5,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc5.png",
    status: "Available",
    speciality: "General physician",
  },
];

const Page = () => {
  return (
    <div className="container">
      <div className="subCont">
        <div className="doctorImg">
          <img src="/assets/assets_frontend/doc1.png" alt="" />
        </div>
        <div className="doctorDetails">
          <div className="doctorProfile">
            <div className="doctorSpecialty">
              <div className="doctorName">
                <h1>Dr. Richard James</h1>
                <img src="/assets/assets_frontend/verified_icon.svg" alt="" />
              </div>
              <p>MBBS - General Physician</p>
            </div>
            <div className="doctorAbout">
              <h3>About</h3>
              <p>
                Dr. Davis has a strong commitment to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies. Dr. Davis has a strong
                commitment to delivering comprehensive medical care, focusing on
                preventive medicine, early diagnosis, and effective treatment
                strategies.
              </p>
            </div>
            <p className="doctorFee">
              Appointment fee: <span>$300</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bookingSlots">
        <h2>Booking slots</h2>
        <div className="AppointmentDate">
          {bookingSlots.map((item, index) => (
            <div key={index} className="AppointmentDay">
              <span>{item.day}</span>
              <span>{item.Date}</span>
            </div>
          ))}
        </div>
        <div className="AppointmentTime">
          <button>8.00 am</button>
          <button>8.30 am</button>
          <button>9.00 am</button>
          <button>9.30 am</button>
          <button>10.00 am</button>
          <button>10.30 am</button>
          <button>11.00 am</button>
        </div>
        <button className="btn">Book an appointment</button>
      </div>
      <div className="relatedDoctors">
        <h2>Related Doctors</h2>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className="doctor-cards">
          {doctors.map((item) => (
            <div key={item?.id} className="doctor-card">
              <img src={item.image} alt="" />
              <span className="available">Available</span>
              <h3>{item.name}</h3>
              <p>{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

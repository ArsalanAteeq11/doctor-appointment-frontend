import "./doctorList.css";
const DoctorsList = () => {
  const doctors = [
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
    {
      name: "Dr. Richard James",
      speciality: "General Physician",
      image: "/assets/assets_frontend/doc1.png",
      status: "Available",
    },
  ];

  return (
    <div className="doctors-list">
      <h2>Top Doctors to Book</h2>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} />
            <span className="doctor-status">{doctor.status}</span>
            <p className="doctor-name">{doctor.name}</p>
            <p className="doctor-speciality">{doctor.speciality}</p>
          </div>
        ))}
      </div>
      <button className="btn-more">More</button>
    </div>
  );
};

export default DoctorsList;

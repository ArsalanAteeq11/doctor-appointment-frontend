import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./doctor.css";

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
    image: "/assets/assets_frontend/doc2.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc3.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc4.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc5.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc6.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc7.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc8.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc9.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc10.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc11.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc12.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc13.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc14.png",
    status: "Available",
  },
  {
    name: "Dr. Richard James",
    speciality: "General Physician",
    image: "/assets/assets_frontend/doc15.png",
    status: "Available",
  },
];

const page = () => {
  return (
    <AdminLayout>
      <div className="doctorListCont">
        <h1>All Doctors</h1>
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
      </div>
    </AdminLayout>
  );
};

export default page;

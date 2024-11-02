import { useSelector } from "react-redux";
import "./doctorList.css";
const DoctorsList = ({selectedSpecialty,setSelectedSpecialty}) => {
  const url = "http://localhost:4000"
  
  const {doctors} = useSelector(store=>store.doctor)

  const filteredDoctors = selectedSpecialty ? doctors.filter((doctor)=>doctor?.specialty === selectedSpecialty) : doctors
  return (
    <div className="doctors-list">
      <h2>Top Doctors to Book</h2>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div className="doctors-grid">
        {filteredDoctors?.map((doctor, index) => (
          <div key={doctor?._id} className="doctor-card">
            <img src={doctor?.profilePhoto ? `${url}/images/${doctor?.profilePhoto}` : null} alt={doctor?.username} />
            <span className="doctor-status">Available</span>
            <p className="doctor-name">{doctor?.username}</p>
            <p className="doctor-speciality">{doctor?.specialty}</p>
          </div>
        ))}
      </div>
      {doctors?.length >10 && 
      <button className="btn-more">More</button>
      }
    </div>
  );
};

export default DoctorsList;

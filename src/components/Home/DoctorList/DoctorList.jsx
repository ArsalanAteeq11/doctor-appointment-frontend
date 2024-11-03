import { useSelector } from "react-redux";
import "./doctorList.css";
import { useRouter } from "next/navigation";
const DoctorsList = ({selectedSpecialty}) => {
  const url = "http://localhost:4000"
  const router = useRouter()
  
  const {doctors} = useSelector(store=>store.doctor)

  const filteredDoctors = selectedSpecialty ? doctors.filter((doctor)=>doctor?.specialty === selectedSpecialty) : doctors
  return (
    <div className="doctors-list">
      <h2>Top Doctors to Book</h2>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div className="doctors-grid">
        {filteredDoctors?.length ?  (filteredDoctors?.map((doctor, index) => (
          <div key={doctor?._id} className="doctor-card" onClick={()=>router.push(`/doctorList/${doctor?._id}`)}>
            <img src={doctor?.profilePhoto ? `${url}/images/${doctor?.profilePhoto}` : null} alt={doctor?.username} />
            <span className="doctor-status">Available</span>
            <p className="doctor-name">{doctor?.username}</p>
            <p className="doctor-speciality">{doctor?.specialty}</p>
          </div>
        ))) : (
          <p className="message">No doctors found of this specialty.</p>
        ) }
      </div>
      {doctors?.length >10 && 
      <button className="btn-more">More</button>
      }
    </div>
  );
};

export default DoctorsList;

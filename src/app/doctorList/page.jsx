"use client";
import React, {  useState } from "react";
import "./doctorList.css"; // separate CSS for styling
import { useRouter } from "next/navigation";
import {  useSelector } from "react-redux";


const DoctorList = () => {
  const router = useRouter();
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const url = "http://localhost:4000"
  const {doctors} = useSelector(store=>store.doctor)

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty(specialty);
  };

 


  const filteredDoctors = selectedSpecialty
    ? doctors?.filter((doctor) => doctor.specialty === selectedSpecialty)
    : doctors;
  return (
    <div className="doctor-list-container">
      <p>Browse through the doctor’s specialist.</p>
      <div className="doctor-list-subCont">
        <div className="filter-section">
        <button className={selectedSpecialty === "General physician" ? "selected" : ""} onClick={() => handleSpecialtyClick("General physician")}>
            General physician
          </button>
        <button className={selectedSpecialty === "Cardiologist" ? "selected" : ""} onClick={() => handleSpecialtyClick("Cardiologist")}>
        Cardiologist
          </button>
          <button className={selectedSpecialty === "Gynecologist" ? "selected" : ""}  onClick={() => handleSpecialtyClick("Gynecologist")}>
            Gynecologist
          </button>
          <button className={selectedSpecialty === "Dermatologist" ? "selected" : ""} onClick={() => handleSpecialtyClick("Dermatologist")}>
            Dermatologist
          </button>
          <button className={selectedSpecialty === "Pediatricians" ? "selected" : ""}  onClick={() => handleSpecialtyClick("Pediatricians")}>
            Pediatricians
          </button>
          <button className={selectedSpecialty === "Neurologist" ? "selected" : ""}  onClick={() => handleSpecialtyClick("Neurologist")}>
            Neurologist
          </button>
          <button className={selectedSpecialty === "Gastroenterologist" ? "selected" : ""}  onClick={() => handleSpecialtyClick("Gastroenterologist")}>
            Gastroenterologist
          </button>
          <button onClick={() => setSelectedSpecialty("")}>
            Show All
          </button> {/* Reset filter button */}
        </div>

        <div className="doctor-cards">
          {filteredDoctors?.length ? (
            filteredDoctors?.map((doctor, index) => (
            <div
              key={index}
              className="doctor-card"
              onClick={() => router.push(`/doctorList/${doctor?._id}`)}
            >
              <img src={doctor?.profilePhoto ? `${url}/images/${doctor.profilePhoto}` : doctor?.gender === "female" ? "https://png.pngtree.com/png-vector/20230715/ourlarge/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png" : "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png"} alt={doctor.name} />
              
                <span className="available">Available</span>
              <h3>{doctor.username}</h3>
              <p>{doctor.specialty}</p>
            </div>
            ))
          ) : (
            <p>No doctors found for this specialty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;

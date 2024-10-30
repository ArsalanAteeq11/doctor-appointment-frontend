"use client";
import React, { useEffect, useState } from "react";
import "./doctorList.css"; // separate CSS for styling
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDoctors } from "@/redux/doctorSlice";


const DoctorList = () => {
  const router = useRouter();
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const dispatch = useDispatch()
  const url = "http://localhost:4000"

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  useEffect(()=>{
    const fetchDoctors = async () =>{
      try {
        const res = await axios.get(`${url}/user/alldoctors`)
        if (res?.data?.success) {
          dispatch(setDoctors(res?.data?.doctors))
        }
        else{
          console.log(res?.data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchDoctors()
  },[dispatch])

  const {doctors} = useSelector(store=>store.doctor)

  const filteredDoctors = selectedSpecialty
    ? doctors?.filter((doctor) => doctor.specialty === selectedSpecialty)
    : doctors;
  return (
    <div className="doctor-list-container">
      <p>Browse through the doctor’s specialist.</p>
      <div className="doctor-list-subCont">
        <div className="filter-section">
        <button onClick={() => handleSpecialtyClick("general physician")}>
            General physician
          </button>
        <button onClick={() => handleSpecialtyClick("Cardiologist")}>
        Cardiologist
          </button>
          <button onClick={() => handleSpecialtyClick("Gynecologist")}>
            Gynecologist
          </button>
          <button onClick={() => handleSpecialtyClick("Dermatologist")}>
            Dermatologist
          </button>
          <button onClick={() => handleSpecialtyClick("Pediatricians")}>
            Pediatricians
          </button>
          <button onClick={() => handleSpecialtyClick("Neurologist")}>
            Neurologist
          </button>
          <button onClick={() => handleSpecialtyClick("Gastroenterologist")}>
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

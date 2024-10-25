"use client";
import React from "react";
import "./doctorList.css"; // separate CSS for styling
import { useRouter } from "next/navigation";

const doctors = [
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "General Physician",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "Gynecologist",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "General Physician",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "Gynecologist",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "General Physician",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "Gynecologist",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "General Physician",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "Gynecologist",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "General Physician",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "Gynecologist",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "General Physician",
    available: true,
  },
  {
    img: "/assets/assets_frontend/doc1.png",
    name: "Dr. Richard James",
    speciality: "Gynecologist",
    available: true,
  },
  // Add more doctors here
];
const DoctorList = () => {
  const router = useRouter();
  return (
    <div className="doctor-list-container">
      <p>Browse through the doctor’s specialist.</p>
      <div className="doctor-list-subCont">
        <div className="filter-section">
          <button>General physician</button>
          <button>Gynecologist</button>
          <button>Dermatologist</button>
          <button>Pediatrician</button>
          <button>Neurologist</button>
          <button>Gastroenterologist</button>
        </div>

        <div className="doctor-cards">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="doctor-card"
              onClick={() => router.push(`/doctorList/${index + 1}`)}
            >
              <img src={doctor.img} alt={doctor.name} />
              {doctor.available ? (
                <span className="available">Available</span>
              ) : (
                <span className="unavailable">Unavailable</span>
              )}
              <h3>{doctor.name}</h3>
              <p>{doctor.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;

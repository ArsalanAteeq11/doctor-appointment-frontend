"use client";
import React, { useEffect } from "react";
import "./doctorList.css"; // separate CSS for styling
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDoctors } from "@/redux/doctorSlice";

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
  const dispatch = useDispatch()
  const url = "http://localhost:4000"

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
              onClick={() => router.push(`/doctorList/${doctor?._id}`)}
            >
              <img src={doctor?.profilePhoto ? `${url}/images/${doctor.profilePhoto}` : "/assets/assets_frontend/profile_pic.png"} alt={doctor.name} />
              
                <span className="available">Available</span>
              <h3>{doctor.username}</h3>
              <p>{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;

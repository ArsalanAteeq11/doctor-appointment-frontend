"use client"
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./doctor.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const url = "http://localhost:4000"
  const [doctors,setDoctors] = useState([])
  useEffect(()=>{
    const fetchDoctors = async () =>{
      try {
        const res = await axios.get(`${url}/user/alldoctors`)
        if (res?.data?.success) {
          setDoctors(res?.data?.doctors)
        }
        else{
          console.log(res?.data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchDoctors()
  },[])
  return (
    <AdminLayout>
      <div className="doctorListCont">
        <h1>All Doctors</h1>
        <div className="doctors-grid">
          {doctors?.length ? (
               doctors?.map((doctor) => (
                <div key={doctor?._id} className="doctor-card">
                  <img src={doctor?.profilePhoto ? `${url}/images/${doctor?.profilePhoto}` : null} alt={doctor.username} />
                  <span className="doctor-status">Available</span>
                  <p className="doctor-name">{doctor.username}</p>
                  <p className="doctor-speciality">{doctor.specialty}</p>
                </div>
              ))
          ) : (
            <p>No Doctors Found</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

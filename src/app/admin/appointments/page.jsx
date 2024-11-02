"use client"
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./appointments.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "@/redux/appointmentSlice";

const appointments = [
  {
    sno: 1,
    patientImg: "/assets/assets_frontend/profile_pic.png",
    patientName: "Richard James",
    department: "Richard James",
    age: "24",
    datetime: "24th July, 2024, 10:AM",
    doctorImg: "/assets/assets_frontend/profile_pic.png",
    doctorName: "Richard James",
    fees: "$30",
  },
  {
    sno: 2,
    patientImg: "/assets/assets_frontend/profile_pic.png",
    patientName: "Richard James",
    department: "Richard James",
    age: "24",
    datetime: "24th July, 2024, 10:AM",
    doctorImg: "/assets/assets_frontend/profile_pic.png",
    doctorName: "Richard James",
    fees: "$30",
  },
  {
    sno: 3,
    patientImg: "/assets/assets_frontend/profile_pic.png",
    patientName: "Richard James",
    department: "Richard James",
    age: "24",
    datetime: "24th July, 2024, 10:AM",
    doctorImg: "/assets/assets_frontend/profile_pic.png",
    doctorName: "Richard James",
    fees: "$30",
  },
];

const page = () => {

  const url = "http://localhost:4000"
  const dispatch = useDispatch()
  const {appointments} = useSelector(store=>store.appointment)
  const handleDeleteAppointment = async (appointmentId) =>{
    try {
      const res = await axios.delete(`${url}/appointment/delete/${appointmentId}`)
      if (res?.data?.success) {
        toast.success(res?.data?.message || "Appointment deleted.")
        dispatch(setAppointments(appointments.filter((appointment)=>appointment._id !== appointmentId)))
      }else{
        toast.error(res?.data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AdminLayout>
      <div className="appointmentCont">
        <h1>All Appointments</h1>
        <div className="appointmentDetails">
          <div className="appointmentTitles">
            <span>#</span>
            <span>Patient</span>
            <span>Department</span>
            <span>Age</span>
            <span>Date & Time</span>
            <span>Doctor</span>
            <span>Fees</span>
          </div>
          {appointments?.length ? (
             appointments?.map((appointment, index) => {
              const { date, day, createdAt, patient, doctor } = appointment;

              // Extract the year from `createdAt`
              const year = new Date(createdAt).getFullYear();
            
              // Combine into formatted string
              const formattedDate = `${date}, ${day}, ${year}`;
            
              return (
                <div key={appointment?._id} className="appointmentContent">
                  <span>{index + 1}</span>
                  <div className="patientProfile">
                    <img src={patient ? `${url}/images/${patient.profilePhoto}` : null} alt="" />
                    <span>{patient?.username}</span>
                  </div>
                  <span>{doctor?.specialty}</span>
                  <span>{patient?.age}</span>
                  <span>{formattedDate} | {appointment?.timeSlot}</span> {/* Display the formatted date */}
                  <div className="doctorProfile">
                    <img src={doctor?.profilePhoto ? `${url}/images/${doctor.profilePhoto}` : null} alt="" />
                    <span>{doctor?.username}</span>
                  </div>
                  <span>${doctor?.fees}</span>
                  <img
                    src="/assets/assets_admin/cancel_icon.svg"
                    alt=""
                    className="cancelIcon"
                    onClick={()=>handleDeleteAppointment(appointment?._id)}
                  />
                </div>
              );
            })
            
          )  : (
            <p>No appointments found.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

"use client"
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./appointments.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "@/redux/appointmentSlice";
import { useRouter } from "next/navigation";



const page = () => {

  const url = "http://localhost:4000"
  const dispatch = useDispatch()
  const router = useRouter()
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
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Patient</th>
          <th>Department</th>
          <th>Age</th>
          <th>Date & Time</th>
          <th>Doctor</th>
          <th>Fees</th>
          <th>Action</th> 
        </tr>
      </thead>
      <tbody>
        {appointments?.length ? (
          appointments.map((appointment, index) => {
            const { date, day, createdAt, patient, doctor } = appointment;
            const year = new Date(createdAt).getFullYear();
            const formattedDate = `${date}, ${day}, ${year}`;
            return (
              <tr key={appointment?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="patientProfile">
                    <img
                      src={patient ? `${url}/images/${patient.profilePhoto}` : null}
                      alt=""
                    />
                    <p>{patient?.username}</p>
                  </div>
                </td>
                <td>{doctor?.specialty}</td>
                <td>{patient?.age}</td>
                <td>{formattedDate} | {appointment?.timeSlot}</td>
                <td>
                  <div className="doctorProfile">
                    <img
                      src={doctor?.profilePhoto ? `${url}/images/${doctor.profilePhoto}` : null}
                      alt=""
                    />
                    <p onClick={()=>router.push(`/doctorList/${doctor?._id}`)}>{doctor?.username}</p>
                  </div>
                </td>
                <td>${doctor?.fees}</td>
                <td>
                  <img
                    src="/assets/assets_admin/cancel_icon.svg"
                    alt=""
                    className="cancelIcon"
                    onClick={() => handleDeleteAppointment(appointment?._id)}
                  />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="8">No appointments found.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

    </AdminLayout>
  );
};

export default page;

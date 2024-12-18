"use client"
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./doctor.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setDoctorList } from "@/redux/doctorSlice";



const page = () => {
  const url = "http://localhost:4000"
  const dispatch = useDispatch()
  const {doctorList} = useSelector(store=>store.doctor)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

 

  const handleDeleteClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      // Fetch the doctor's appointments
      const appointmentsRes = await axios.get(`${url}/appointment/doctorAppointments/${selectedDoctor._id}`);
      const appointments = appointmentsRes.data.appointments;
      console.log("appointments",appointments)
  
      const today = new Date();
      const todayDate = today.getDate();
      const todayMonth = today.toLocaleString('default', { month: 'short' });
      const todayYear = today.getFullYear();
  
      // Check for active or future appointments
      const hasActiveAppointments = appointments.some(appointment => {
        const appointmentYear = new Date(appointment.createdAt).getFullYear();
        return (
          appointment.status === "approved" &&
          (
            // Check if the appointment date is today or in the future
            (appointmentYear > todayYear) ||
            (appointmentYear === todayYear && appointment.month > todayMonth) ||
            (appointmentYear === todayYear && appointment.month === todayMonth && parseInt(appointment.date) >= todayDate)
          )
        );
      });
  
      if (hasActiveAppointments) {
        toast.error("Doctor cannot be deleted as they have active or future appointments.");
        setIsModalOpen(false);
        setSelectedDoctor(null);
        return;
      }
  
      // Proceed with deletion if no active appointments
      const res = await axios.delete(`${url}/user/delete/${selectedDoctor._id}`);
      if (res?.data?.success) {
        dispatch(setDoctorList(doctorList.filter(doc => doc._id !== selectedDoctor._id)));
        setIsModalOpen(false);
        setSelectedDoctor(null);
        toast.success("Doctor deleted successfully.");
      }
    } catch (error) {
      console.log("Error deleting doctor", error);
    }
  };
  
  

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };
  return (
    <AdminLayout>
      <div className="doctorListCont">
        <h1>All Doctors</h1>
        <div className="doctors-grid">
          {doctorList?.length ? (
               doctorList?.map((doctor) => (
                <div key={doctor?._id} className="doctor-card">
                  <img src={doctor?.profilePhoto ? `${url}/images/${doctor?.profilePhoto}` : null} alt={doctor.username} />
                  <span className="doctor-status">Available</span>
                  <p className="doctor-name">{doctor.username}</p>
                  <p className="doctor-speciality">{doctor.specialty}</p>
                  <button
                  className="delete-icon"
                  onClick={() => handleDeleteClick(doctor)}
                >
                  ×
                </button>
                </div>
              ))
          ) : (
            <p>No Doctors Found</p>
          )}
           {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>Are you sure you want to permanently delete this doctor?</p>
              <button className="confirm-btn" onClick={handleDeleteConfirm}>
                Yes, Delete
              </button>
              <button className="cancel-btn" onClick={handleModalClose}>
                Cancel
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

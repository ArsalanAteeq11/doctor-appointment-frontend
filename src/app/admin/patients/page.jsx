"use client";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./patient.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setPatients } from "@/redux/patientSlice";



const page = () => {
  const url = "http://localhost:4000";
  const dispatch = useDispatch()
  const {patients} = useSelector(store=>store.patient)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);


  const handleDeleteClick = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {

      const res = await axios.delete(`${url}/user/delete/${selectedPatient?._id}`);
      if (res?.data?.success) {
        
        dispatch(setPatients(patients.filter((patient) => patient._id !== selectedPatient?._id)));
        setIsModalOpen(false);
        setSelectedPatient(null);
        toast.success("Patient deleted successfully.")
      }
    } catch (error) {
      console.log("Error deleting doctor", error);
    }
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };
  return (
    <AdminLayout>
      <div className="appointmentCont">
        <h1>All Patients</h1>
        <div className="appointmentDetails">
          <table>

          <thead>
            <tr>

            <th>#</th>
            <th>Patient</th>
            <th>Age</th>
            <th>Date & Birth</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>

          {patients?.map((patient, index) => {
            const { dob } = patient;
            const patientDob = new Date(dob);

            // Extract date, month, and year
            const day = patientDob.getDate();
            const month = patientDob.toLocaleString("en-US", {
              month: "short",
            });
            const year = patientDob.getFullYear();

            // Format into "15, Nov, 2024"
            const formattedDate = `${day}, ${month}, ${year}`;

            return (
              <tr key={patient?._id} className="appointmentContent">
                <td>{index + 1}</td>
                <td>

                <div className="patientProfile">
                  <img
                    src={
                      patient?.profilePhoto
                        ? `${url}/images/${patient?.profilePhoto}`
                        : null
                    }
                    alt=""
                  />
                  <span>{patient?.username}</span>
                </div>
                </td>
                <td>{patient?.age}</td>
                <td>{formattedDate}</td>
                <td>

                <img
                  src="/assets/assets_admin/cancel_icon.svg"
                  alt=""
                  className="canelIcon"
                  onClick={()=>handleDeleteClick(patient)}
                />
                </td>
              </tr>
            );
          })}
          
          </tbody>
          </table>
          {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>Are you sure you want to permanently delete this patient?</p>
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

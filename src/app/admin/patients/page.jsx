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
  const handleDeletePatient = async (patientId) => {
    try {

      const res = await axios.delete(`${url}/user/delete/${patientId}`);
      if (res?.data?.success) {
        
        dispatch(setPatients(patients.filter((patient) => patient._id !== patientId)));
        toast.success("Patient deleted successfully.")
      }
    } catch (error) {
      console.log("Error deleting doctor", error);
    }
  };
  return (
    <AdminLayout>
      <div className="appointmentCont">
        <h1>All Patients</h1>
        <div className="appointmentDetails">
          <div className="appointmentTitles">
            <span>#</span>
            <span>Patient</span>
            <span>Age</span>
            <span>Date & Birth</span>
          </div>
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
              <div key={patient?._id} className="appointmentContent">
                <span>{index + 1}</span>
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
                <span>{patient?.age}</span>
                <span>{formattedDate}</span>
                <img
                  src="/assets/assets_admin/cancel_icon.svg"
                  alt=""
                  className="canelIcon"
                  onClick={()=>handleDeletePatient(patient?._id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

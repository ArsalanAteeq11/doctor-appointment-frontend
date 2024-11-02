"use client"
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./dashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "@/redux/appointmentSlice";
import { setPatients } from "@/redux/patientSlice";
import { setDoctorList } from "@/redux/doctorSlice";
import axios from "axios";

const page = () => {
  
  const url = "http://localhost:4000"
  const dispatch = useDispatch()

  const fetchAppointments = async () =>{
    try {
      const res = await axios.get(`${url}/appointment/allAppointments`)
      if (res?.data?.success) {
        console.log("appointments", res?.data?.appointments)
        dispatch(setAppointments(res?.data?.appointments))
      }
      else{
        console.log(res?.data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const fetchDoctors = async () =>{
    try {
      const res = await axios.get(`${url}/user/alldoctors`)
      if (res?.data?.success) {
        console.log("doctors", res?.data?.doctors)
        dispatch(setDoctorList(res?.data?.doctors))
      }
      else{
        console.log(res?.data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const fetchPatients = async () => {
    try {
      const res = await axios.get(`${url}/user/allpatients`);
      if (res?.data?.success) {
        console.log("patients",res?.data?.patients)
        dispatch(setPatients(res?.data?.patients));
      } else {
        console.log(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const {appointments} = useSelector(store=>store.appointment)
  const {doctorList} = useSelector(store=>store.doctor)
  const {patients} = useSelector(store=>store.patient)
  useEffect(()=>{
    fetchAppointments()
    fetchDoctors()
    fetchPatients()
  },[dispatch])
  return (
    <AdminLayout>
      <div className="dashboardCont">
        <div className="dashboardSubCont1">
          <div className="dashboardDetails">
            <img src="/assets/assets_admin/doctor_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>{doctorList?.length}</h2>
              <p>Doctors</p>
            </div>
          </div>
          <div className="dashboardDetails">
            <img src="/assets/assets_admin/appointments_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>{appointments?.length}</h2>
              <p>Appointments</p>
            </div>
          </div>
          <div className="dashboardDetails">
            <img src="/assets/assets_admin/patients_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>{patients?.length}</h2>
              <p>Patients</p>
            </div>
          </div>
        </div>
        <div className="dashboardSubCont2">
          <div className="latestAppointmentTitle">
            <img src="/assets/assets_admin/list_icon.svg" alt="" />
            <span>Latest Appointment</span>
          </div>
          <div className="latestAppointments">
            <div className="userProfile">
              <img src="/assets/assets_frontend/profile_pic.png" alt="" />
              <div className="userProfileText">
                <h2>Dr. Richard James</h2>
                <p>Booking on 24th July, 2024</p>
              </div>
            </div>
            <img
              src="/assets/assets_admin/cancel_icon.svg"
              alt=""
              className="cancelIcon"
            />
          </div>
          <div className="latestAppointments">
            <div className="userProfile">
              <img src="/assets/assets_frontend/profile_pic.png" alt="" />
              <div className="userProfileText">
                <h2>Dr. Richard James</h2>
                <p>Booking on 24th July, 2024</p>
              </div>
            </div>
            <img
              src="/assets/assets_admin/cancel_icon.svg"
              alt=""
              className="cancelIcon"
            />
          </div>
          <div className="latestAppointments">
            <div className="userProfile">
              <img src="/assets/assets_frontend/profile_pic.png" alt="" />
              <div className="userProfileText">
                <h2>Dr. Richard James</h2>
                <p>Booking on 24th July, 2024</p>
              </div>
            </div>
            <img
              src="/assets/assets_admin/cancel_icon.svg"
              alt=""
              className="cancelIcon"
            />
          </div>
          <div className="latestAppointments">
            <div className="userProfile">
              <img src="/assets/assets_frontend/profile_pic.png" alt="" />
              <div className="userProfileText">
                <h2>Dr. Richard James</h2>
                <p>Booking on 24th July, 2024</p>
              </div>
            </div>
            <img
              src="/assets/assets_admin/cancel_icon.svg"
              alt=""
              className="cancelIcon"
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

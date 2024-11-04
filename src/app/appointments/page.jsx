"use client";
import { useEffect, useState } from "react";
import "./appointment.css";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const [appointments, setAppointments] = useState([]);
  const router = useRouter()
  const { token, user } = useSelector((store) => store.auth);
  const url = "http://localhost:4000";

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${url}/appointment/getUserAppointment`, {
          headers: { token },
        });
        if (res.data.success) {
          setAppointments(res.data.appointments); // Assuming the API sends back the user's role (doctor or patient)
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments", error);
      }
    };

    fetchAppointments();
  }, [token]);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const res = await axios.patch(
        `${url}/appointment/cancel/${appointmentId}`,
        {}, // Pass an empty body if no data is required
        { headers: { token } }
      );
      if (res?.data?.success) {
        // console.log(res?.data?.appointment);
        setAppointments(
          appointments.filter(
            (appointment) => appointment._id !== appointmentId
          )
        );
        toast.success(
          res?.data?.message || "Appointment canceled successfully"
        );
      } else {
        toast.error("Failed to cancel appointment");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while canceling the appointment");
    }
  };
 
  const handleApproveAppointment = async (appointmentId) => {
    try {
      const res = await axios.patch(
        `${url}/appointment/approve/${appointmentId}`,
        {}, // Pass an empty body if no data is required
        { headers: { token } }
      );
      if (res?.data?.success) {
        setAppointments(
          appointments.map(
            (appointment) => appointment._id === appointmentId ? { ...appointment, status: "approved" } : appointment
          )
        );
        toast.success(
          res?.data?.message || "Appointment Approved successfully"
        );
      } else {
        toast.error("Failed to cancel appointment");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while canceling the appointment");
    }
  };
 
  const formatDate = (appointment) => {
    const currentYear = new Date().getFullYear();
    const year = appointment.createdAt.startsWith(currentYear.toString())
      ? currentYear
      : currentYear + 1; // Auto-increment year if past current year
    return `${appointment.date}, ${appointment.day}, ${year}`;
  };
  
  return (
    <div className="container">
      <h1>My Appointments</h1>
      <div className="appointmentContainer">
        <hr />
          {appointments.length === 0 ? (
            <p>No appointments found</p>
          ) : (
            appointments.filter((appointment)=>user?.role === "doctor" ? appointment.status !== "cancelled" : appointment).map((appointment) => (
              <div className="appointmentsDetail"  key={appointment?._id}>
              
              <div className="appointmentContent">

                <img src={
                    user?.role === "patient"
                      ? `${url}/images/${appointment?.doctor?.profilePhoto}`
                      : `${url}/images/${appointment?.patient?.profilePhoto}`
                  } alt="" onClick={()=>{user?.role === "patient" && router.push(`/doctorList/${appointment?.doctor?._id}`)}} />
                <div className="doctorDetails">
                  {user?.role === "patient" ? (
                     <h2>Dr. {appointment?.doctor?.username}</h2>
                  ) : (
                    <h2>{appointment?.patient?.username}</h2>
                  ) }
                  <p>{user?.role !== "patient" &&  appointment?.doctor?.specialty }</p>
                  <span>Address:</span>
                  <p>
                    {user?.role === "patient" ?  appointment?.doctor?.address?.addressLine1 : appointment?.patient?.address?.addressLine1} <br /> {user?.role === "patient" ?  appointment?.doctor?.address?.addressLine2 : appointment?.patient?.address?.addressLine2}
                  </p>
                  <p>Date & Time: {formatDate(appointment)} | {appointment?.timeSlot}</p>
                  {user?.role !== "patient" && <p><span>Phone:</span>{appointment?.patient?.phone}</p>}
                  
                </div>
              </div>
              <div className="btnCont">
                {user?.role === "patient" ? (
                  <button className="status">{appointment?.status}</button>
                ) : (
                  <button className="status" disabled={appointment?.status === "approved"} onClick={()=>{handleApproveAppointment(appointment?._id)}}>{appointment?.status === "pending" ? "Approve" : "Approved"}</button>
                )}
              
              {appointment?.status !== "cancelled" && 
              <button className="cancelBtn" onClick={()=>handleCancelAppointment(appointment?._id)}>Cancel appointment</button>
              }
            </div>

          
        </div>
            ))
          )}
             
      </div>
    </div>
  );
};

export default page;

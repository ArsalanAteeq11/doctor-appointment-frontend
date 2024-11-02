"use client"
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "@/redux/appointmentSlice";
import { setPatients } from "@/redux/patientSlice";
import { setDoctorList } from "@/redux/doctorSlice";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {

  const url = "http://localhost:4000"
  const dispatch = useDispatch()
  const router = useRouter()
  const [latestAppointments, setLatestAppointments] = useState([]);
  console.log(latestAppointments)
  const { appointments } = useSelector(store => store.appointment)
  const { doctorList } = useSelector(store => store.doctor)
  const { patients } = useSelector(store => store.patient)

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`${url}/appointment/allAppointments`)
      if (res?.data?.success) {
        dispatch(setAppointments(res?.data?.appointments))

        // Sort appointments by `day` and `date` in descending order (latest first)
        const sortedAppointments = [...appointments].sort((a, b) => {
          // Parse day and date into a comparable Date object for sorting
          const parseDate = (appointment) => {
            const monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(appointment.day);
            return new Date(2024, monthIndex, appointment.date); // Replace `2024` with a dynamic year if necessary
          };

          return parseDate(b) - parseDate(a); // Sort by parsed date (newest first)
        });

        // Get only the latest 4 sorted appointments
        const latest = sortedAppointments.slice(0, 4);
        setLatestAppointments(latest);
      }
      else {
        console.log(res?.data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const fetchDoctors = async () => {
    try {
      const res = await axios.get(`${url}/user/alldoctors`)
      if (res?.data?.success) {
        dispatch(setDoctorList(res?.data?.doctors))
      }
      else {
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
        dispatch(setPatients(res?.data?.patients));
      } else {
        console.log(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchAppointments()
    fetchDoctors()
    fetchPatients()
  }, [dispatch])

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
      <div className="dashboardCont">
        <div className="dashboardSubCont1">
          <div className="dashboardDetails" onClick={()=>router.push("/admin/doctors")}>
            <img src="/assets/assets_admin/doctor_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>{doctorList?.length}</h2>
              <p>Doctors</p>
            </div>
          </div>
          <div className="dashboardDetails" onClick={()=>router.push("/admin/appointments")}>
            <img src="/assets/assets_admin/appointments_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>{appointments?.length}</h2>
              <p>Appointments</p>
            </div>
          </div>
          <div className="dashboardDetails" onClick={()=>router.push("/admin/patients")}>
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
          {latestAppointments?.length ? (
            latestAppointments?.map((appointment) => {
              const { day, date, createdAt, doctor } = appointment

              const year = new Date(createdAt).getFullYear();

              const formattedDate = `${date}, ${day}, ${year}`;
              return (

                <div className="latestAppointments" key={appointment?._id}>
                  <div className="userProfile">
                    <img src={`${url}/images/${doctor?.profilePhoto}`} alt="" />
                    <div className="userProfileText">
                      <h2>Dr. {doctor?.username}</h2>
                      <p>Booking on {formattedDate}</p>
                    </div>
                  </div>
                  <img
                    src="/assets/assets_admin/cancel_icon.svg"
                    alt=""
                    className="cancelIcon"
                    onClick={()=>handleDeleteAppointment(appointment?._id)}
                  />
                </div>
              )})) : (
            <p>No Appointments Yet.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

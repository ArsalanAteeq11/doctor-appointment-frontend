"use client";
import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setLoading } from "@/redux/userSlice";


const doctors = [
  {
    id: 1,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc1.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 2,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc2.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 3,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc3.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 4,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc4.png",
    status: "Available",
    speciality: "General physician",
  },
  {
    id: 5,
    name: "Dr. Richard James",
    image: "/assets/assets_frontend/doc5.png",
    status: "Available",
    speciality: "General physician",
  },
];
const getNextSevenDays = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today); // Clone the current date
    nextDate.setDate(today.getDate() + i); // Increment by i days

    const day = nextDate.toLocaleString("en-US", { month: "short" }); // Get day name (Mon, Tue, etc.)
    const date = nextDate.getDate(); // Get day of the month

    // Store nextDate as a Date object, not a string
    days.push({ day, dateObject: nextDate, date }); // Push both the date object and day of month
  }
  return days;
};

const timeSlots = ["8:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am"];
const Page = () => {
  const id = useParams().bookAppointment
  const [doctor, setDoctor] = useState(null)
  const dispatch = useDispatch()
  const {loading,user,token} = useSelector(store=>store.auth)
  const {doctors} = useSelector(store=>store.doctor)
  const url = "http://localhost:4000"

  const [selectedDay, setSelectedDay] = useState(null);  // Selected day and date
  const [selectedTime, setSelectedTime] = useState(null); // Selected time slot
  const [appointments, setAppointments] = useState([]);  // Store all appointments of the doctor
  const [bookedSlots, setBookedSlots] = useState([]); // Booked slots for the selected day


  const handleDaySelection = (dayItem) => {
    setSelectedDay(dayItem);

    // Filter appointments for the selected day
    const bookedOnSelectedDay = appointments.filter(
      (appointment) => appointment.date === dayItem.date
    );

    // Get booked time slots from filtered appointments
    const bookedTimes = bookedOnSelectedDay.map((appointment) => appointment.timeSlot);
    setBookedSlots(bookedTimes); // Store booked time slots
  };
  useEffect(()=>{
  
    const fetchDoctor = async () =>{
      try {
        const res = await axios.get(`${url}/user/getuser/${id}`)
        if (res?.data?.success) {
           setDoctor(res?.data?.user)
        }
        else{
          console.log(res?.data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchDoctor()
  },[])

  const bookAppointment = async () => {
    if (!selectedDay || !selectedTime) {
      toast.error("Please select both a date and a time slot.");
      return;
    }
    dispatch(setLoading(true))
    try {
      const appointmentData = {
        doctorId: id,
        patientId: user?._id,
        day:selectedDay.day,
        date: selectedDay.date,

        timeSlot: selectedTime,
      };

      const response = await axios.post(`${url}/appointment/book`, appointmentData, { headers: { token } });

      if (response?.data?.success) {
        toast.success("Appointment booked successfully!");
        setSelectedDay(null);
        setSelectedTime(null);

      } else {
        toast.error(response.data.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error booking appointment.");
    }finally{
      dispatch(setLoading(false))

    }
  };

  const filteredDoctors = doctor && doctors.filter((doc)=>doc.specialty === doctor.specialty)
  console.log("filteredDoctors", filteredDoctors)
  console.log("doctors",doctors)

  return (
    <div className="bookingAppointmentCont">
      <div className="subCont">
        <div className="doctorImg">
          <img src={doctor?.profilePhoto ? `${url}/images/${doctor?.profilePhoto}` : doctor?.gender === "female" ? "https://png.pngtree.com/png-vector/20230715/ourlarge/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png" : "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png"} alt="" />
        </div>
        <div className="doctorDetails">
          <div className="doctorProfile">
            <div className="doctorSpecialty">
              <div className="doctorName">
                <h1>{doctor?.username}</h1>
                {user?._id === id && <p>(You)</p>}
                <img src="/assets/assets_frontend/verified_icon.svg" alt="" />
              </div>
              <p>{doctor?.education} - {doctor?.specialty}</p>
            </div>
            <div className="doctorAbout">
              <h3>About</h3>
              <p>
                {doctor?.about}
              </p>
            </div>
            <p className="doctorFee">
              Appointment fee: <span>${doctor?.fees}</span>{" "}
            </p>
          </div>
        </div>
      </div>
      {user?._id !== id && <div className="bookingSlots">
        <h2>Booking slots</h2>
        <div className="AppointmentDate">
          {getNextSevenDays().map((item, index) => (
            <div key={index} className={`AppointmentDay ${selectedDay?.date === item.date ? "selected" : ''}` }  onClick={() => handleDaySelection(item)}>
              <span>{item.day}</span>
              <span>{item.date}</span>
            </div>
          ))}
        </div>
        <div className="AppointmentTime">
        {timeSlots.map((time, index) => (
            <button
              key={index}
              className={`${selectedTime === time ? "selectedTime" : ''}`}
              disabled={bookedSlots.includes(time)} // Disable if the slot is already booked
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
        <button className="btn" onClick={bookAppointment}>{loading? "Loading..." :  "Book an appointment"}</button>
      </div>}
      
      <div className="relatedDoctors">
        <h2>Related Doctors</h2>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className="doctor-cards">
          {filteredDoctors?.length ? (
            filteredDoctors.map((item) => (
              <div key={item?._id} className="doctor-card">
                <img src={item?.profilePhoto ? `${url}/images/${item?.profilePhoto}` : null} alt="" />
  
                <span className="available">Available</span>
                <h3>{item?.username}</h3>
                <p>{item?.specialty}</p>
              </div>
            )
          )) : (
            <p>No doctors found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

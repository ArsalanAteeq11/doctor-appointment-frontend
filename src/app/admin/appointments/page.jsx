import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./appointments.css";

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
          {appointments.map((appointment) => (
            <div key={appointment.sno} className="appointmentContent">
              <span>{appointment.sno}</span>
              <div className="patientProfile">
                <img src={appointment.patientImg} alt="" />
                <span>{appointment.patientName}</span>
              </div>
              <span>{appointment.department}</span>
              <span>{appointment.age}</span>
              <span>{appointment.datetime}</span>
              <div className="doctorProfile">
                <img src={appointment.doctorImg} alt="" />
                <span>{appointment.doctorName}</span>
              </div>
              <span>{appointment.fees}</span>
              <img
                src="/assets/assets_admin/cancel_icon.svg"
                alt=""
                className="canelIcon"
              />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;

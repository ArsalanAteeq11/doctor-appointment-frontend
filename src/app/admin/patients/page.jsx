import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./patient.css";

const appointments = [
  {
    sno: 1,
    patientImg: "/assets/assets_frontend/profile_pic.png",
    patientName: "Richard James",
    age: "24",
    datetime: "24th July, 2024, 10:AM",
  },
  {
    sno: 2,
    patientImg: "/assets/assets_frontend/profile_pic.png",
    patientName: "Richard James",
    age: "24",
    datetime: "24th July, 2024, 10:AM",
  },
  {
    sno: 3,
    patientImg: "/assets/assets_frontend/profile_pic.png",
    patientName: "Richard James",
    age: "24",
    datetime: "24th July, 2024, 10:AM",
  },
];


const page = () => {
  return (
    <AdminLayout>
      <div className="appointmentCont">
        <h1>All Patients</h1>
        <div className="appointmentDetails">
          <div className="appointmentTitles">
            <span>#</span>
            <span>Patient</span>
            <span>Age</span>
            <span>Date & Time</span>
          </div>
          {appointments.map((appointment) => (
            <div key={appointment.sno} className="appointmentContent">
              <span>{appointment.sno}</span>
              <div className="patientProfile">
                <img src={appointment.patientImg} alt="" />
                <span>{appointment.patientName}</span>
              </div>
              <span>{appointment.age}</span>
              <span>{appointment.datetime}</span>
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

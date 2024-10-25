import AdminLayout from "@/components/AdminLayout/AdminLayout";
import "./dashboard.css";

const page = () => {
  return (
    <AdminLayout>
      <div className="dashboardCont">
        <div className="dashboardSubCont1">
          <div className="dashboardDetails">
            <img src="/assets/assets_admin/doctor_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>14</h2>
              <p>Doctors</p>
            </div>
          </div>
          <div className="dashboardDetails">
            <img src="/assets/assets_admin/appointments_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>2</h2>
              <p>Appointments</p>
            </div>
          </div>
          <div className="dashboardDetails">
            <img src="/assets/assets_admin/patients_icon.svg" alt="" />
            <div className="dashboardText">
              <h2>5</h2>
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

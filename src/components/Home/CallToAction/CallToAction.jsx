"use client"
import Link from "next/link";
import "./callToAction.css";
import { useSelector } from "react-redux";
const CallToAction = () => {
  const {token} = useSelector(store=>store.auth )
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h2>Book Appointment With 100+ Trusted Doctors</h2>
        {token ?
        <Link href="/doctorList" className="btn-create-account">Book Appointment</Link>
        :
        <Link href="/register" className="btn-create-account">Create Account</Link>
        }
      </div>
      <div className="appointment_img">
        <img src="/assets/assets_frontend/appointment_img.png" alt="" />
      </div>
    </div>
  );
};

export default CallToAction;

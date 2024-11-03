import { useRouter } from "next/navigation";
import "./hero.css";
const Hero = () => {
  const router = useRouter()
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Book Appointment With Trusted Doctors</h1>
        <div className="group-profile">
          <img src="/assets/assets_frontend/group_profiles.png" alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="btn" onClick={()=>router.push("/doctorList")}>
          <span>Book appointment</span>
          <img src="/assets/assets_frontend/arrow_icon.svg" alt="" />
        </div>
      </div>
      <div className="hero-image">
        {/* Insert doctor images */}
        <img src="/assets/assets_frontend/header_img.png" alt="Doctors" />
      </div>
    </div>
  );
};

export default Hero;

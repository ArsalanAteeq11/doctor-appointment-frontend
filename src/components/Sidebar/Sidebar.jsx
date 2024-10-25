"use client";
import { useRouter, usePathname } from "next/navigation"; // Use next/router for client-side navigation
import "./sidebar.css";

const dashboardItems = [
  {
    icon: "/assets/assets_admin/home_icon.svg",
    text: "Dashboard",
    path: "/admin",
  },
  {
    icon: "/assets/assets_admin/appointment_icon.svg",
    text: "Appointments",
    path: "/admin/appointments",
  },
  {
    icon: "/assets/assets_admin/people_icon.svg",
    text: "Doctors List",
    path: "/admin/doctors",
  },
  {
    icon: "/assets/assets_admin/patient_icon.svg",
    text: "Patients",
    path: "/admin/patients",
  },
];

const Sidebar = () => {
  const router = useRouter(); // Use Next.js router
  const pathname = usePathname(); // Get the current URL path

  const handleNavigation = (item) => {
    router.push(item.path); // Navigate using router.push (client-side navigation)
  };

  return (
    <div className="sidebar">
      <div className="sidebarList">
        {dashboardItems.map((item) => (
          <div
            key={item.text}
            className={`listItems ${
              pathname === item.path ? "activeItem" : ""
            }`}
            onClick={() => handleNavigation(item)}
          >
            <img src={item.icon} alt={`${item.text} icon`} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

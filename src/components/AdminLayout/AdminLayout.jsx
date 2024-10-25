// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";
import "./adminlayout.css";

const AdminLayout = ({ children }) => {
  //   const router = useRouter();

  //   useEffect(() => {
  //     const userIsAdmin = false; // Replace with real admin check logic
  //     if (!userIsAdmin) {
  //       router.push("/login"); // Redirect non-admin users to login
  //     }
  //   }, [router]);

  return (
    <div className="adminContainer">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default AdminLayout;

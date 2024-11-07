"use client";
import React, { useState } from "react";
import "./navbar.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "@/redux/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [selected,setSelected] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false);
  const url = "http://localhost:4000"
  const { user } = useSelector((store) => store.auth);



  const toggleMenu = () => setMenuOpen(!menuOpen);
  const logout = () =>{
    localStorage.removeItem("token")
    dispatch(setUser(null))
    dispatch(setToken(null))
    router.push("/login")
    toast.success("User Logged out successfully")
  }
  return (
    <nav className="navbar">
      <div className="logo">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <Link href="/">
          <img src="/assets/assets_frontend/logo.svg" alt="" />
        </Link>
      </div>

    
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li className={selected === "Home" ? "selected" : ""} onClick={()=>{setSelected("Home")
          router.push("/")}}>Home
        </li>
        <li className={selected === "All Doctors" ? "selected" : ""} onClick={()=>{setSelected("All Doctors")
          router.push("/doctorList")}}>All Doctors
        </li>
        <li className={selected === "About" ? "selected" : ""} onClick={()=>{setSelected("About")
          router.push("/about")}}>About
        </li>
        <li className={selected === "Contact" ? "selected" : ""} onClick={()=>{setSelected("Contact")
          router.push("/contact")}}>Contact
        </li>
        {user?.role === "admin" && 
        <li className={selected === "Admin" ? "selected" : ""} onClick={()=>{setSelected("Admin")
          router.push("/admin")}}>Admin
        </li>
        }
      </ul>
       

      {user ? (
        <div className="imgCont">
        <img src={user?.profilePhoto ? `${url}/images/${user?.profilePhoto}` : "/assets/assets_admin/upload_area.svg"} className="img"/>
        <div className="dropdownCont">
          <ul>
            <li onClick={()=> router.push(user?.profilePhoto ? "/profile" : "/editProfile")}>My Profile</li>
            <li onClick={()=>router.push("/appointments")}>My Appointments</li>
            <li onClick={logout} >Logout</li>
          </ul>
        </div>
        
        </div>

      ) : (
        
        <button
          className="btn-create-account"
          onClick={() => router.push("/register")}
        >
          Create Account
        </button>
      )}
  
    </nav>
  );
};

export default Navbar;

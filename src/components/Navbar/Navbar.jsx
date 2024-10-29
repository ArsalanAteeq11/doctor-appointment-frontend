"use client";
import React from "react";
import "./navbar.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "@/redux/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.auth);

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
        <Link href="/">
          <img src="/assets/assets_frontend/logo.svg" alt="" />
        </Link>
      </div>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/doctorList">All Doctors</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {user ? (
        <div className="imgCont">
        <img src="/assets/assets_frontend/profile_pic.png" className="img"/>
        <div className="dropdownCont">
          <ul>
            <li onClick={()=>router.push("/profile")}>My Profile</li>
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

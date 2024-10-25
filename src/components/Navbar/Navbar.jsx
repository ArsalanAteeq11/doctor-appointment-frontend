"use client";
import React from "react";
import "./navbar.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
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
      <button
        className="btn-create-account"
        onClick={() => router.push("/register")}
      >
        Create Account
      </button>
    </nav>
  );
};

export default Navbar;

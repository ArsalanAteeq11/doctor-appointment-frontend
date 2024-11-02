"use client"
import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Specialities from "./Speciality/Speciality";
import DoctorsList from "./DoctorList/DoctorList";
import CallToAction from "./CallToAction/CallToAction";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setDoctors } from "@/redux/doctorSlice";

const HomePage = () => {
  const dispatch = useDispatch()
  const url = "http://localhost:4000"
  const [selectedSpecialty,setSelectedSpecialty] = useState("")

  useEffect(()=>{
    const fetchDoctors = async () =>{
      try {
        const res = await axios.get(`${url}/user/alldoctors`)
        if (res?.data?.success) {
          dispatch(setDoctors(res?.data?.doctors))
        }
        else{
          console.log(res?.data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchDoctors()
  },[dispatch])
  return (
    <>
      <Hero />
      <Specialities selectedSpecialty={selectedSpecialty} setSelectedSpecialty={setSelectedSpecialty} />
      <DoctorsList selectedSpecialty={selectedSpecialty} setSelectedSpecialty={setSelectedSpecialty} />
      <CallToAction />
    </>
  );
};

export default HomePage;

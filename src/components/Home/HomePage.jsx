import React from "react";
import Hero from "./Hero/Hero";
import Specialities from "./Speciality/Speciality";
import DoctorsList from "./DoctorList/DoctorList";
import CallToAction from "./CallToAction/CallToAction";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Specialities />
      <DoctorsList />
      <CallToAction />
    </>
  );
};

export default HomePage;

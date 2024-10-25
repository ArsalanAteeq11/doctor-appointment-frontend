import "./speciality.css";
const Specialities = () => {
  const specialities = [
    {
      name: "General Physician",
      icon: "/assets/assets_frontend/General_physician.svg",
    },
    {
      name: "Gynecologist",
      icon: "/assets/assets_frontend/Gynecologist.svg",
    },
    {
      name: "Dermatologist",
      icon: "/assets/assets_frontend/Dermatologist.svg",
    },
    {
      name: "Pediatrician",
      icon: "/assets/assets_frontend/Pediatricians.svg",
    },
    {
      name: "Neurologist",
      icon: "/assets/assets_frontend/Neurologist.svg",
    },
    {
      name: "Gastroenterologist",
      icon: "/assets/assets_frontend/Gastroenterologist.svg",
    },
  ];

  return (
    <div className="specialities">
      <h2>Find by Speciality</h2>
      <p>
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        <br />
        your appointment hassle-free.
      </p>
      <div className="speciality-list">
        {specialities.map((speciality, index) => (
          <div key={index} className="speciality-item">
            <img src={speciality.icon} alt={speciality.name} />
            <span>{speciality.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;

"use client";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { useEffect, useRef, useState } from "react";
import { setLoading, setUser } from "@/redux/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
const AddDoctorPage = () => {
  const dispatch = useDispatch();
  const { loading, user, token } = useSelector((store) => store.auth);
  const patient = user?.role === "patient";
  const imageRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    education: "",
    addressLine1: "",
    addressLine2: "",
    yearsOfExperience: "", // New field for years of experience
    gender: "",
    fees: "",
    phone: "",
    dob: "",
    about: "",
    age:"",
    language: "", // New field for languages spoken
  });

  const [image, setImage] = useState(null); // For image preview

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    
    const form = new FormData();
    form.append("name", formData.name);
    form.append("specialty", formData.specialty);
    form.append("education", formData.education);
    form.append("addressLine1", formData.addressLine1);
    form.append("addressLine2", formData.addressLine2);
    form.append("experience", formData.yearsOfExperience); // Added years of experience
    form.append("fees", formData.fees);
    form.append("phone", formData.phone);
    form.append("dob", formData.dob);
    form.append("age",formData.age)
    form.append("about", formData.about);
    form.append("language", formData.language); // Added languages
    form.append("image", image);
    
    try {
      const response = await axios.post(
        "http://localhost:4000/user/editprofile",
        form,
        { headers: { token } }
      );
      if (response.data.success) {
        const updatedProfile = {
          ...user,
          username: response?.data?.user?.username,
          about: response?.data?.user?.about,
          education: response?.data?.user?.education,
          experience: response?.data?.user?.experience,
          fees: response?.data?.user?.fees,
          profilePhoto: response?.data?.user?.profilePhoto,
          specialty: response?.data?.user?.specialty,
          yearsOfExperience: response?.data?.user?.experience, // Updated profile
          language: response?.data?.user?.language,
          phone: response?.data?.user?.phone,
          dob: response?.data?.user?.dob,
          age:response?.data?.user?.age
        };
        dispatch(setLoading(false));
        dispatch(setUser(updatedProfile));
        toast.success(response.data.message);
        setFormData({
          name: "",
          specialty: "",
          education: "",
          addressLine1: "",
          addressLine2: "",
          yearsOfExperience: "", // Reset years of experience
          fees: "",
          about: "",
          language: "",
          dob: "",
          age:"",
          phone: "",
        });
        setImage(null);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      toast.error(
        "Error updating profile: " +
        (error.response?.data?.message || error.message)
      );
    }
  };
  return (
    <div className="profileContainer">
      <h1>
        Edit <span>Profile</span>{" "}
      </h1>
      <div className="subCont">
        <div className="profilePhoto">
          <input
            ref={imageRef}
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
          />
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "/assets/assets_admin/upload_area.svg"
            }
            alt="Doctor Preview"
            className="previewImage"
            onClick={() => imageRef.current.click()}
          />
          <p>
            Upload your <br /> picture
          </p>
        </div>
        <form className="doctorsDetail" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={user?.username}
              disabled
            />
          </div>

          {!patient && (
            <div>
              <label htmlFor="specialty">Specialty</label>
              <select
                style={{ color: formData.specialty ? "black" : "#a2a2a2" }}
                value={formData.specialty}
                onChange={handleChange}
                name="specialty"
              >
                <option value="" disabled hidden>
                  Specialty
                </option>
                <option value="General physician">General physician</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              placeholder="Email"
              disabled
            />
          </div>

          {!patient && (
            <div>
              <label htmlFor="education">Education</label>
              <input
                type="text"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
          )}
 
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              value={user?.role}
              placeholder="Role"
              disabled
            />
          </div>

          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label htmlFor="addressLine1">Address</label>
            <input
              type="text"
              name="addressLine1"
              placeholder="Address 1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Address 2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              style={{ color: formData.gender ? "black" : "#a2a2a2" }}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {!patient && (
            <div>
              <label htmlFor="yearsOfExperience">Years of Experience</label>
              <input
                type="number"
                name="yearsOfExperience"
                placeholder="Years of Experience"
                onChange={handleChange}
                value={formData.yearsOfExperience}
              />
            </div>
          )}

          <div>
            <label htmlFor="language">Languages Spoken</label>
            <input
              type="text"
              name="language"
              placeholder="Languages (e.g., English, Spanish)"
              value={formData.language}
              onChange={handleChange}
            />
          </div>

          {!patient && (
            <>
              <div>
                <label htmlFor="fees">Fees</label>
                <input
                  type="text"
                  name="fees"
                  placeholder="Fees"
                  value={formData.fees}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="about">About Me</label>
                <textarea
                  name="about"
                  rows="6"
                  placeholder="Write about yourself"
                  onChange={handleChange}
                  value={formData.about}
                ></textarea>
              </div>
            </>
          )}

          <button className="btn" type="submit">
            {loading ? "Loading..." : "Edit Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorPage;

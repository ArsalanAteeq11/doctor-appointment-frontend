"use client";
import { useSelector } from "react-redux";
import "./profile.css";
const AddDoctorPage = () => {
  //   const dispatch = useDispatch();
    const { loading, user, token } = useSelector((store) => store.auth);
  //   const patient = user.role === "Patient";
  // const imageRef = useRef();

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     specialty: "",
  //     education: "",
  //     addressLine1: "",
  //     addressLine2: "",
  //     experience: "",
  //     yearsOfExperience: "", // New field for years of experience
  //     gender: "",
  //     fees: "",
  //     about: "",
  //     languages: "", // New field for languages spoken
  //   });

  //   const [image, setImage] = useState(null); // For image preview

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     dispatch(setLoading(true));

  //     const form = new FormData();
  //     form.append("name", formData.name);
  //     form.append("specialty", formData.specialty);
  //     form.append("education", formData.education);
  //     form.append("addressLine1", formData.addressLine1);
  //     form.append("addressLine2", formData.addressLine2);
  //     form.append("experience", formData.experience);
  //     form.append("yearsOfExperience", formData.yearsOfExperience); // Added years of experience
  //     form.append("fees", formData.fees);
  //     form.append("about", formData.about);
  //     form.append("languages", formData.languages); // Added languages
  //     form.append("image", image);

  //     try {
  //       const response = await axios.post(
  //         "http://localhost:4000/user/editprofile",
  //         form,
  //         { headers: { token } }
  //       );
  //       if (response.data.success) {
  //         const updatedProfile = {
  //           ...user,
  //           about: response?.data?.user?.about,
  //           education: response?.data?.user?.education,
  //           experience: response?.data?.user?.experience,
  //           fees: response?.data?.user?.fees,
  //           profilePhoto: response?.data?.user?.profilePhoto,
  //           specialty: response?.data?.user?.specialty,
  //           yearsOfExperience: response?.data?.user?.yearsOfExperience, // Updated profile
  //           languages: response?.data?.user?.languages, // Updated profile
  //         };
  //         dispatch(setUser(updatedProfile));
  //         toast.success(response.data.message);
  //         setFormData({
  //           name: "",
  //           specialty: "",
  //           education: "",
  //           addressLine1: "",
  //           addressLine2: "",
  //           experience: "",
  //           yearsOfExperience: "", // Reset years of experience
  //           fees: "",
  //           about: "",
  //           languages: "", // Reset languages
  //         });
  //         setImage(null);
  //       }
  //     } catch (error) {
  //       toast.error(
  //         "Error updating profile: " +
  //           (error.response?.data?.message || error.message)
  //       );
  //     }
  //     dispatch(setLoading(false));
  //   };

  return (
    <div className="profileContainer">
      <h1>
        Edit <span>Profile</span>{" "}
      </h1>
      <div className="subCont">
        <div className="profilePhoto">
          {/* <input
            ref={imageRef}
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
          /> */}
          <img
            src="/assets/assets_admin/upload_area.svg"
            alt="Doctor Preview"
            className="previewImage"
          />
          <p>
            Upload your <br /> picture
          </p>
        </div>
        <div className="doctorsDetail">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" value={user?.username}/>
          </div>

          <div>
            <label htmlFor="specialty">Specialty</label>
            <select
              style={{ color: "#a2a2a2" }}
              defaultValue=""
              onChange={(e) => (e.target.style.color = "black")}
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

          <div>
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" value={user?.email} placeholder="Email" disabled />
          </div>

          <div>
            <label htmlFor="education">Education</label>
            <input type="text" name="education" placeholder="Education" />
          </div>

          <div>
            <label htmlFor="role">Role</label>
            <input type="text" name="role" value={user?.role} placeholder="Role" disabled />
          </div>

          <div>
            <label htmlFor="addressLine1">Address</label>
            <input type="text" name="addressLine1" placeholder="Address 1" />
            <input type="text" name="addressLine2" placeholder="Address 2" />
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              style={{ color: "#a2a2a2" }}
              defaultValue=""
              onChange={(e) => (e.target.style.color = "black")}
            >
              <option value="" disabled hidden>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="yearsOfExperience">Years of Experience</label>
            <input
              type="number"
              name="yearsOfExperience"
              placeholder="Years of Experience"
            />
          </div>

          <div>
            <label htmlFor="languages">Languages Spoken</label>
            <input
              type="text"
              name="languages"
              placeholder="Languages (e.g., English, Spanish)"
            />
          </div>

          <div>
            <label htmlFor="fees">Fees</label>
            <input type="text" name="fees" placeholder="Fees" />
          </div>

          <div>
            <label htmlFor="about">About Me</label>
            <textarea
              name="about"
              rows="6"
              placeholder="Write about yourself"
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorPage;

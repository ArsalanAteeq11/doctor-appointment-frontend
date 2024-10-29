"use client";
import axios from "axios";
import "./signup.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setToken, setUser } from "@/redux/userSlice";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "", // Default role
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    dispatch(setLoading(true));
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/user/register",
        formData
      );

      if (response.data.success) {
        dispatch(setToken(response?.data?.token));
        localStorage.setItem("token", response?.data?.token);
        router.push("/verifyOTP");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error registering account. Please try again.");
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="container">
      <h2>Create Account</h2>
      <p>Please sign up to book appointment</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange} // Use combined handler here
          style={{ color: formData.role ? "black" : "#a2a2a2" }}
        >
          <option value="" disabled hidden>
            Role
          </option>
          <option value="doctor">doctor</option>
          <option value="patient">patient</option>
        </select>

        <button type="submit">
          {loading ? "Loading..." : "Create account"}
        </button>
      </form>
      <p className="existing-account-link">
        Already have an account?
        <span>
          <a href="/login">Login here</a>
        </span>
      </p>
    </div>
  );
};

export default SignUp;

"use client"
import { setLoading, setToken, setUser } from "@/redux/userSlice";
import "./signin.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignIn = () => {
 
  const router = useRouter()
  const dispatch = useDispatch()
  const {loading} = useSelector(store=>store.auth)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    dispatch(setLoading(true));
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        formData
      );

      if (response.data.success) {
        dispatch(setToken(response?.data?.token));
        dispatch(setUser(response?.data?.user))
        localStorage.setItem("token", response?.data?.token);
        router.push("/");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error logging account. Please try again.");
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <p>Please login to book appointment</p>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor=""> Email</label>
        <br />
        <input 
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required/>
        <button type="submit">{loading ? "Loading..." : "Login"}</button>
      </form>
      <p className="existing-account-link">
        Don't have an account?
        <span>
          <a href="/register">Register here</a>
        </span>
      </p>
    </div>
  );
};

export default SignIn;

"use client";
import { useState } from "react";
import "./verifyotp.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Verifyotp = () => {
  const [otp, setOtp] = useState("");
  console.log(otp);
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((store) => store.auth);

  const handleSubmit = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        "http://localhost:4000/user/verifyOTP",
        { otp }
      );
      console.log(response);
      if (response?.data?.success) {
        dispatch(setUser(response?.data?.user));
        router.push("/");
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="container">
      <h2>OTP Verification</h2>
      <div className="form">
        <label htmlFor="">Enter OTP</label>
        <br />
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button onClick={handleSubmit}>
          {loading ? "Loading..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
};

export default Verifyotp;

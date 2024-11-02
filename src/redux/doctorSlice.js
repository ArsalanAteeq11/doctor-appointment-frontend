// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors:[],
  doctorList:[]
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setDoctors:(state,action)=>{
        state.doctors = action.payload
       
    },
    setDoctorList:(state,action)=>{
       state.doctorList = action.payload
    }
  },
});

export const {setDoctors ,setDoctorList} = doctorSlice.actions;

export default doctorSlice.reducer;

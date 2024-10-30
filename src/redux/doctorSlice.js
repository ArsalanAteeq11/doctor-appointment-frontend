// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors:[]
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setDoctors:(state,action)=>{
        state.doctors = action.payload
       
    }
  },
});

export const {setDoctors } = doctorSlice.actions;

export default doctorSlice.reducer;

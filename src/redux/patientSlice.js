// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  patients:[],
  
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatients:(state,action)=>{
        state.patients = action.payload
       
    }
  },
});

export const {setPatients } = patientSlice.actions;

export default patientSlice.reducer;

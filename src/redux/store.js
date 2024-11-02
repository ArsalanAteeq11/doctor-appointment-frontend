// redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './userSlice';
import doctorReducer from './doctorSlice';
import appointmentReducer from './appointmentSlice';
import patientReducer from './patientSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  doctor : doctorReducer,
  appointment : appointmentReducer,
  patient:patientReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

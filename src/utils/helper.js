export const isAdmin = (user) => {
    return user?.role === "admin";
  };
  
  export const isDoctor = (user) => {
    return user?.role === "doctor";
  };
  
  export const isPatient = (user) => {
    return user?.role === "patient";
  };
  
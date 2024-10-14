// src/context/AppointmentContext.jsx
import React, { createContext, useState } from 'react';

// สร้าง Context
export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const removeAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, removeAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};

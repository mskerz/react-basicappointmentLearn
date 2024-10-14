import { useState } from 'react'
import moment from 'moment/min/moment-with-locales'
import './App.css'
import AppointmentList from './components/ApppointmentList'
import AppointmentForm from './components/AppointmentForm'

function App() {
  const [count, setCount] = useState(0)
  const [appointments,setAppointments] = useState([])


  const addAppointments = (newapp)=>{
    const newAppointments = [...appointments,newapp]
    setAppointments(newAppointments)
  };

  const removeAppointments = (indexRemove)=>{
      const updateAppointments = appointments.filter((_,index)=>index !=indexRemove)  
      setAppointments(updateAppointments)
  }

   
  return (
    <>
      <div className="container">
      <AppointmentForm addAppointment={addAppointments}/>
      <div className="mt-5">
      <AppointmentList appointment={appointments} onDelete={removeAppointments}/>
      </div>
      </div>
    </>
  )
}

export default App

import React, { useState ,useContext } from 'react'
import { AppointmentContext } from '../context/AppointmentContext';
import { useNavigate } from 'react-router-dom';

export default function AppointmentForm() {
  const { addAppointment } = useContext(AppointmentContext);

  const [title, setTitle] = useState('')
  const [detail,setDetail] = useState('')
  const [date,setDate] = useState('')
  const navigate  = useNavigate()

  const handleSubmit = (e )=>{
    e.preventDefault();
    const newapp = {
      title: title,
      detail: detail,
      date: date,
    }
    if(title&&detail&&date){
      addAppointment(newapp)
    }else{
      alert("You must a fill new appointment")
      e.preventDefault();
      return ;
    }

    setTitle('');
    setDate('');
    setDetail('');
    navigate('/lists-appointment')
  }
  return (
    <div className="justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="form-floating">
      <h3>Appointment Basic App With React Bootstrap
      </h3>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
           
        />
      </div>
      <div className="mb-3">
        <label htmlFor="detail" className="form-label">Details</label>
         <textarea name="" onChange={(e)=>setDetail(e.target.value)} className="form-control"   value={detail}   rows="3" id=""></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="datetime-local"
          className="form-control"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
           
        />
      </div>
      <button  className="btn btn-primary ">Save Appointment</button>
      </form>
    </div>
  )
}

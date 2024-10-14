import React, { useContext } from 'react'
import moment from 'moment/min/moment-with-locales'
import { AppointmentContext } from '../context/AppointmentContext';
import { useNavigate } from 'react-router-dom';

function AppointmentList() {
    const {appointments,removeAppointment} = useContext(AppointmentContext)
    const navigate = useNavigate();
    return (
        <div className="m-4">

            <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button> {/* ปุ่มย้อนกลับ */}

            {appointments.length > 0 ? (
                <ul className="list-group mt-3">
                    {appointments.map((appointment, index) => (
                        <li className="list-group-item" key={index}>

                            <div className="">
                                <div className="card-title">
                                    <span className="d-flex flex-row justify-content-between">
                                        <p>{appointment.title} </p>
                                        <button onClick={()=>removeAppointment(index)} className="btn btn-close"></button>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <p>{appointment.detail}</p>
                                    <p>{moment(appointment.date).locale('th').format('LLLL')}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No Have Appointment</div>
            )


            }

        </div >
    )
}

export default AppointmentList
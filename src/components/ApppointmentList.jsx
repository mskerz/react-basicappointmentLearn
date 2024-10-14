import React from 'react'
import moment from 'moment/min/moment-with-locales'

function AppointmentList({ appointment ,onDelete }) {
    return (
        <div>
            {appointment.length > 0 ? (
                <ul className="list-group">
                    {appointment.map((appointment, index) => (
                        <li className="list-group-item" key={index}>

                            <div className="">
                                <div className="card-title">
                                    <span className="d-flex flex-row justify-content-between">
                                        <p>{appointment.title} </p>
                                        <button onClick={()=>onDelete(index)} className="btn btn-close"></button>
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
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentList from './components/ApppointmentList'; // สมมติว่ามีคอมโพเนนต์ AppointmentList
import AppointmentForm from './components/AppointmentForm'; // สมมติว่ามีคอมโพเนนต์สำหรับเพิ่มนัด

function App() {
  return (

    <Router>
      <div className="container">
        <Routes>
          
          <Route path="/" element={<AppointmentForm /> } />
          <Route path="/lists-appointment" element={<AppointmentList />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

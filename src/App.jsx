import { useState } from 'react';
import './App.css';

import Menu from './components/Menu';
import TreatmentRecord from './components/TreatmentRecord';
import Form from './components/Form';

function SubmittedBox({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="submittedBox">
      <h3>Submitted Treatment Details</h3>

      <p>
        <span className="displayinfo">Treatment ID: </span> {data.TreatmentID}
      </p>
      <p>
        <span className="displayinfo">Treatment Type:</span>
        {data.Treatment_Type}
      </p>
      <p>
        <span className="displayinfo">Treatment Name: </span>
        {data.Treatment_Name}
      </p>
      <p>
        <span className="displayinfo">Start Date:</span> {data.Start_Date}
      </p>
    </div>
  );
}

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="background_parent">
      <Menu />

      <TreatmentRecord />

      <Form setSubmittedData={setSubmittedData} />

      <SubmittedBox data={submittedData} />
    </div>
  );
}

export default App;

import { useState } from 'react';

function Form({ setSubmittedData }) {
  const [formData, setFormData] = useState({
    TreatmentID: '',
    Treatment_Type: '',
    Treatment_Name: '',
    Start_Date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);
  };

  return (
    <div className="ParentForm">
      <h2>Display Treatment</h2>

      <form className="Form" onSubmit={handleSubmit}>
        <label>Treatment ID</label>
        <input
          type="text"
          name="TreatmentID"
          value={formData.TreatmentID}
          onChange={handleChange}
          required
        />

        <label>Treatment Type</label>
        <input
          type="text"
          name="Treatment_Type"
          value={formData.Treatment_Type}
          onChange={handleChange}
          required
        />

        <label>Treatment Name</label>
        <input
          type="text"
          name="Treatment_Name"
          value={formData.Treatment_Name}
          onChange={handleChange}
          required
        />

        <label>Start Date</label>
        <input
          type="date"
          name="Start_Date"
          value={formData.Start_Date}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

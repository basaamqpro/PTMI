import { useState } from 'react';

import TreatmentData from '../TreatmentData.json';
import Options from './Options';

function TreatmentRecord() {
  const [selectedType, setSelectedType] = useState('All Types');

  const filteredData =
    selectedType === 'All Types'
      ? TreatmentData
      : TreatmentData.filter(
          (rowData) => rowData.Treatment_Type === selectedType
        );

  return (
    <div className="Treatmentrecord">
      <h1 className="Treatment_title">Treatment Record</h1>

      <h2 className="filter">Filter by Treatment Type</h2>

      <Options selectedType={selectedType} setSelectedType={setSelectedType} />

      <Table data={filteredData} />
    </div>
  );
}

function Table({ data }) {
  return (
    <div className="Table">
      <div className="parents_column">
        <h3>Treatment ID</h3>
        <h3>Type</h3>
        <h3>Name</h3>
        <h3>Start Date</h3>
      </div>

      <ItemList data={data} />
    </div>
  );
}

function ItemList({ data }) {
  return (
    <div className="TableList">
      {data.map((rowData) => (
        <div className="table_row" key={rowData.TreatmentID}>
          <p className="table_id">{rowData.TreatmentID}</p>
          <p className="table_treatment_type">{rowData.Treatment_Type}</p>
          <p>{rowData.Treatment_Name}</p>
          <p>{rowData.Start_Date}</p>
        </div>
      ))}

      {data.length === 0 && <p>No treatment records found.</p>}
    </div>
  );
}

export default TreatmentRecord;

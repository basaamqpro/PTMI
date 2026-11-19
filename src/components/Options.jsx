function Options({ selectedType, setSelectedType }) {
  return (
    <div className="Treatmentrecord">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="All Types">All Types</option>
        <option value="Physiotherapy">Physiotherapy</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Orthopaedics">Orthopaedics</option>
        <option value="General">General</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Neurology">Neurology</option>
        <option value="Ophthalmology">Ophthalmology</option>
      </select>
    </div>
  );
}

export default Options;

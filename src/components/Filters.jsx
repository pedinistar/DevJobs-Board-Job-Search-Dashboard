const Filters = ({
  isRemote,
  setIsRemote,
  selectedLocation,
  setSelectedLocation,
  locations,
  selectedJobType,
  setSelectedJobType,
}) => {
  return (
    <div>
      Filters
      {/* Remote Filter */}
      <div>
        <input
          id="remoteCheckbox"
          type="checkbox"
          checked={isRemote}
          onChange={(e) => setIsRemote(e.target.checked)}
        />
        <label htmlFor="remoteCheckbox">Remote</label>
      </div>
      {/* Location Filter */}
      <select
        name="location"
        id="location"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">All Locations</option>

        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      {/* Job Type Filter */}
      <select
        name="jobType"
        id="jobType"
        value={selectedJobType}
        onChange={(e) => setSelectedJobType(e.target.value)}
      >
        <option value="">All Job Types</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
        <option value="Freelance">Freelance</option>
      </select>
    </div>
  );
};

export default Filters;

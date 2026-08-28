const Filters = ({
  isRemote,
  setIsRemote,
  selectedLocation,
  setSelectedLocation,
  locations,
}) => {
  return (
    <div>
      Filters
      <input
        id="remoteCheckbox"
        type="checkbox"
        checked={isRemote}
        onChange={(e) => setIsRemote(e.target.checked)}
      />
      <label htmlFor="remoteCheckbox">Remote</label>
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
    </div>
  );
};

export default Filters;

const LocationFilter = ({ location, setLocation }) => {
  return (
    <div>
      <label htmlFor="location">Location:</label>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        name="location"
        id="location"
      >
        <option value="">All Locations</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="delhi">Delhi</option>
        <option value="bangalore">Bangalore</option>
        <option value="pune">Pune</option>
      </select>
    </div>
  );
};

export default LocationFilter;

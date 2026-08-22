const JobTypeFilter = ({ jobType, setJobType }) => {
  return (
    <div>
      <label htmlFor="jobType">Job Type:</label>
      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        name="jobType"
        id="jobType"
      >
        <option value="">All Job Types</option>
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
      </select>
    </div>
  );
};

export default JobTypeFilter;

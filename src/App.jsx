import jobs from "./data/jobs";
import JobCard from "./components/JobCard";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationFilter from "./components/LocationFilter";
import JobTypeFilter from "./components/JobTypeFilter";
import RemoteFilter from "./components/RemoteFilter";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [isRemote, setIsRemote] = useState(false);

  const filteredJobs = jobs.filter(
    (job) =>
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.jobType.toLowerCase().includes(jobType.toLowerCase()) &&
        !isRemote) ||
      job.remote,
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <LocationFilter location={location} setLocation={setLocation} />

      <JobTypeFilter jobType={jobType} setJobType={setJobType} />

      <RemoteFilter isRemote={isRemote} setIsRemote={setIsRemote} />

      <div>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;

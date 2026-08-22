import jobs from "./data/jobs";
import JobCard from "./components/JobCard";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationFilter from "./components/LocationFilter";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()),
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <LocationFilter location={location} setLocation={setLocation} />

      <div>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;

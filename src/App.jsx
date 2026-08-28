import { useEffect, useState } from "react";
import { fetchJobs } from "./api/jobsAPI";
import { normalizeJob } from "./utils/normalizeJob";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const locations = [...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    // const matchesRemote = isRemote ? job.remote : true;
    const matchesRemote = !isRemote || job.remote;

    const matchesLocation =
      !selectedLocation || job.location === selectedLocation;

    return matchesSearch && matchesRemote && matchesLocation;
  });

  useEffect(() => {
    async function loadJobs() {
      const response = await fetchJobs();

      const normalizedJobs = response.data.map(normalizeJob);

      setJobs(normalizedJobs);
    }

    loadJobs();
  }, []);
  return (
    <div>
      <h1>DevJobs Board</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Filters
        isRemote={isRemote}
        setIsRemote={setIsRemote}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        locations={locations}
      />

      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default App;

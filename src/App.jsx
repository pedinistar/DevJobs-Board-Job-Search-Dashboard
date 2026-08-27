import { useEffect, useState } from "react";
import { fetchJobs } from "./api/jobsAPI";
import { normalizeJob } from "./utils/normalizeJob";
import JobList from "./components/JobList";

const App = () => {
  const [jobs, setJobs] = useState([]);

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

      <JobList jobs={jobs} />
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import { fetchJobs } from "./api/jobsAPI";
import { normalizeJob } from "./utils/normalizeJob";
import JobCard from "./components/JobCard";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const response = await fetchJobs();

      const normalizedJobs = response.data.map(normalizeJob);

      setJobs(normalizedJobs);

      console.log(normalizedJobs);
    }

    loadJobs();
  }, []);
  return (
    <div>
      <h1>DevJobs Board</h1>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default App;

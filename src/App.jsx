import jobs from "./data/jobs";
import JobCard from "./components/JobCard";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationFilter from "./components/LocationFilter";
import JobTypeFilter from "./components/JobTypeFilter";
import RemoteFilter from "./components/RemoteFilter";
import JobDetails from "./components/JobDetails";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [savedJobs, setSavedJobs] = useState(() => {
    const savedJobsJSON = localStorage.getItem("savedJobs");

    return savedJobsJSON ? JSON.parse(savedJobsJSON) : [];
  });

  // React state → localStorage
  useEffect(() => {
    const savedJobsJSON = JSON.stringify(savedJobs);

    localStorage.setItem("savedJobs", savedJobsJSON);
  }, [savedJobs]);

  const saveJob = (job) => {
    const alreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    if (!alreadySaved) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.jobType.toLowerCase().includes(jobType.toLowerCase()) &&
      (!isRemote || job.remote),
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <p>Saved jobs: {savedJobs.length}</p>

      <LocationFilter location={location} setLocation={setLocation} />

      <JobTypeFilter jobType={jobType} setJobType={setJobType} />

      <RemoteFilter isRemote={isRemote} setIsRemote={setIsRemote} />

      {/* null is used cz if selected job is null then jobdetails wont be visible while it it was {} its still an empty object thus would have made bugs */}
      {selectedJob && (
        <JobDetails
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          saveJob={saveJob}
        />
      )}
      <div>
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            setSelectedJob={setSelectedJob}
            saveJob={saveJob}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

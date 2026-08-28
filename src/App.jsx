import { useEffect, useState } from "react";
import { fetchJobs } from "./api/jobsAPI";
import { normalizeJob } from "./utils/normalizeJob";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import JobModal from "./components/JobModal";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const locations = [...new Set(jobs.map((job) => job.location))];
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
    const saved = localStorage.getItem("bookmarkedJobs");
    return saved ? JSON.parse(saved) : [];
  });
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    localStorage.setItem("bookmarkedJobs", JSON.stringify(bookmarkedJobs));
  }, [bookmarkedJobs]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    // const matchesRemote = isRemote ? job.remote : true;
    const matchesRemote = !isRemote || job.remote;

    const matchesLocation =
      !selectedLocation || job.location === selectedLocation;

    const matchesJobType =
      !selectedJobType || job.jobTypes.includes(selectedJobType);

    return matchesSearch && matchesRemote && matchesLocation && matchesJobType;
  });

  const toggleBookmark = (job) => {
    setBookmarkedJobs((prev) => {
      const alreadyBookmarked = prev.some((savedJob) => savedJob.id === job.id);

      if (alreadyBookmarked) {
        return prev.filter((savedJob) => savedJob.id !== job.id);
      }

      return [...prev, job];
    });
  };

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
        selectedJobType={selectedJobType}
        setSelectedJobType={setSelectedJobType}
      />

      <JobModal
        selectedJob={selectedJob}
        onClose={() => setSelectedJob(null)}
        bookmarkedJobs={bookmarkedJobs}
        toggleBookmark={toggleBookmark}
      />

      <JobList jobs={filteredJobs} setSelectedJob={setSelectedJob} />
    </div>
  );
};

export default App;

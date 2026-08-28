import { useEffect, useMemo, useState } from "react";
import { fetchJobs } from "./api/jobsAPI";
import { normalizeJob } from "./utils/normalizeJob";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import JobModal from "./components/JobModal";
import Navbar from "./components/Navbar";
import { AlertCircle } from "lucide-react";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
    const saved = localStorage.getItem("bookmarkedJobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarkedJobs", JSON.stringify(bookmarkedJobs));
  }, [bookmarkedJobs]);

  const bookmarkedCount = bookmarkedJobs.length;

  const loadJobs = async () => {
    setHasError(false);
    try {
      const response = await fetchJobs();
      const normalizedJobs = response.data.map(normalizeJob);
      setJobs(normalizedJobs);
    } catch (err) {
      setHasError(true);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const locations = useMemo(() => {
    return [...new Set(jobs.map((job) => job.location))].filter(Boolean);
  }, [jobs]);

  const activeJobs = showBookmarks ? bookmarkedJobs : jobs;

  const filteredJobs = activeJobs.filter((job) => {
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

  const clearFilters = () => {
    setSearchTerm("");
    setIsRemote(false);
    setSelectedLocation("");
    setSelectedJobType("");
  };

  const toggleBookmark = (job) => {
    setBookmarkedJobs((prev) => {
      const alreadyBookmarked = prev.some((savedJob) => savedJob.id === job.id);

      if (alreadyBookmarked) {
        return prev.filter((savedJob) => savedJob.id !== job.id);
      }

      return [...prev, job];
    });
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <Navbar
        showBookmarks={showBookmarks}
        setShowBookmarks={setShowBookmarks}
        bookmarkedCount={bookmarkedJobs.length}
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Header Hero Section */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              {showBookmarks ? "YOUR SHORTLIST" : "FIND YOUR NEXT ROLE"}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {showBookmarks ? "Saved jobs" : "Explore opportunities"}
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              {showBookmarks
                ? "Keep the roles you want to come back to."
                : "A carefully curated list of roles from teams building the future."}
            </p>
          </div>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <hr className="my-8 border-gray-800" />

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <Filters
              isRemote={isRemote}
              setIsRemote={setIsRemote}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              locations={locations}
              selectedJobType={selectedJobType}
              setSelectedJobType={setSelectedJobType}
              clearFilters={clearFilters}
            />
          </aside>

          <section className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
              <span>
                <strong className="text-white">{filteredJobs.length}</strong>{" "}
                {showBookmarks ? "saved jobs" : "open roles"}
              </span>

              <button
                onClick={() => setHasError(!hasError)}
                className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                Demo error state
              </button>
            </div>

            <JobList
              jobs={filteredJobs}
              setSelectedJob={setSelectedJob}
              bookmarkedJobs={bookmarkedJobs}
              toggleBookmark={toggleBookmark}
              hasError={hasError}
              loadJobs={loadJobs}
              clearFilters={clearFilters}
            />
          </section>
        </div>
      </main>

      <JobModal
        selectedJob={selectedJob}
        onClose={() => setSelectedJob(null)}
        bookmarkedJobs={bookmarkedJobs}
        toggleBookmark={toggleBookmark}
      />
    </div>
  );
};

export default App;

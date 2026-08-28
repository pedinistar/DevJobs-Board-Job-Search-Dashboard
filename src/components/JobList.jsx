import { useState } from "react";
import JobCard from "./JobCard";
import { AlertCircle, Search, ChevronLeft, ChevronRight } from "lucide-react";

const JobList = ({
  jobs,
  setSelectedJob,
  bookmarkedJobs,
  toggleBookmark,
  hasError,
  loadJobs,
  clearFilters,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Pagination Logic
  const totalPages = Math.ceil(jobs.length / jobsPerPage) || 1;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  // 1. Error State View (Demo Error State)
  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-black py-20 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-white">
          Something went wrong
        </h3>
        <p className="mt-1 max-w-sm text-xs text-gray-400">
          We couldn't load the latest roles. Try again to continue browsing.
        </p>
        <button
          onClick={loadJobs}
          className="mt-5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-gray-200"
        >
          Retry
        </button>
      </div>
    );
  }

  // 2. Empty State View (No jobs match active filters)
  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-black py-20 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-gray-400">
          <Search className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-white">
          No jobs found
        </h3>
        <p className="mt-1 text-xs text-gray-400">
          Try adjusting your search or filters.
        </p>
        <button
          onClick={clearFilters}
          className="mt-5 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-gray-800"
        >
          Clear filters
        </button>
      </div>
    );
  }

  // 3. Normal Jobs Grid View
  return (
    <div className="flex flex-col gap-8">
      {/* Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {currentJobs.map((job) => {
          const isBookmarked = bookmarkedJobs.some(
            (savedJob) => savedJob.id === job.id,
          );

          return (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => setSelectedJob(job)}
              isBookmarked={isBookmarked}
              onToggleBookmark={toggleBookmark}
            />
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-3 py-4 text-xs font-medium text-gray-400">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="flex items-center gap-1 rounded-lg border border-gray-800 px-3 py-1.5 transition hover:bg-gray-900 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Previous
        </button>

        <span>
          Page <strong className="text-white">{currentPage}</strong> of{" "}
          {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="flex items-center gap-1 rounded-lg border border-gray-800 px-3 py-1.5 transition hover:bg-gray-900 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent"
        >
          Next
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default JobList;

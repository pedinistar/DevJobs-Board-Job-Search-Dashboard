import JobCard from "./JobCard";

const SavedJobs = ({ savedJobs, removeSavedJob }) => {
  return (
    <div>
      {savedJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          removeSavedJob={removeSavedJob}
          isSavedPage={true}
          savedJobs={savedJobs}
        />
      ))}
    </div>
  );
};

export default SavedJobs;

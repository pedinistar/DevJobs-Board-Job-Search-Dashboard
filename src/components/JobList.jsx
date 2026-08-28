import JobCard from "./JobCard";

const JobList = ({ jobs, setSelectedJob }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
      ))}
    </div>
  );
};

export default JobList;

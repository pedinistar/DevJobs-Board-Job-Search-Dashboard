import { jobsData } from "@/data/jobs";
import JobCard from "./JobCard";

export default function JobsList() {
  //To fix unconsistent job types data from API
  const jobs = jobsData.map((job) => ({
    ...job,
    job_types: Array.isArray(job.job_types)
      ? job.job_types
      : Object.values(job.job_types),
  }));

  return (
    <div className="m-4">
      {jobs.map((job) => (
        <JobCard key={job.slug} job={job} />
      ))}
    </div>
  );
}

import type { JobDataTypes } from "@/types/job";

export default function JobCard({ job }: { job: JobDataTypes }) {
  return (
    <div className="border p-3">
      <h3 className="font-bold">{job.title}</h3>
      <p>{job.company_name}</p>
      {job.remote ? "Remote" : "In-Office"}

      {job.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}

      {job.job_types.map((job_type) => (
        <p key={job_type}>{job_type}</p>
      ))}

      <strong>Location: {job.location}</strong>
      <p>{job.created_at}</p>
    </div>
  );
}

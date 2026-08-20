import type { JobDataTypes } from "@/types/job";
import { Button } from "./ui/button";
import { FaRegBookmark } from "react-icons/fa6";
import { Badge } from "./ui/badge";

export default function JobCard({ job }: { job: JobDataTypes }) {
  return (
    <div className="border p-3 mb-5">
      <h3 className="font-bold">{job.title}</h3>
      <p>{job.company_name}</p>

      {/* {job.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))} */}

      {/* {job.job_types.map((job_type) => (
        <p key={job_type}>{job_type}</p>
      ))} */}

      <div className="flex gap-4">
        <strong>Location: {job.location}</strong>
        {job.remote && <Badge>Remote</Badge>}
      </div>

      <p>{job.created_at}</p>

      <div className="flex items-center gap-4">
        <FaRegBookmark />
        <Button>Apply</Button>
      </div>
    </div>
  );
}

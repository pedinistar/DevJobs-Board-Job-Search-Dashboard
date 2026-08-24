import { IoLocationSharp } from "react-icons/io5";

const JobCard = ({ job, saveJob, setSelectedJob }) => {
  return (
    <div className="border rounded max-w-100 p-4">
      <h3>{job.title}</h3>

      <em>{job.company}</em>

      <div className="flex items-center gap-2">
        <IoLocationSharp />
        <p>{job.location}</p>
      </div>

      <div className="flex">
        <p>{job.jobType}</p> {job.remote && <p>Remote</p>}
      </div>

      <p>{job.description.slice(0, 50) + "..."}</p>

      <div>
        <button onClick={() => setSelectedJob(job)}>View Details</button>

        <button onClick={() => saveJob(job)}>Save Job</button>
      </div>
    </div>
  );
};

export default JobCard;

import { IoClose } from "react-icons/io5";

const JobDetails = ({ selectedJob, setSelectedJob }) => {
  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black/30 ">
      <div className="modal bg-white w-[90%] max-w-150 rounded-md p-6">
        {/* rather than using button to remove the modal using css hidden and all its way better to make setselectedjob as null then it will go away */}
        <button onClick={() => setSelectedJob(null)}>
          <IoClose />
        </button>

        <h2>{selectedJob.title}</h2>

        <p>{selectedJob.company}</p>

        <p>{selectedJob.location}</p>

        <p>{selectedJob.description}</p>

        <button>Apply</button>
        <button>Save Job</button>
      </div>
    </div>
  );
};

export default JobDetails;

const JobModal = ({ selectedJob, onClose, bookmarkedJobs, toggleBookmark }) => {
  if (!selectedJob) return null;
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <button onClick={() => toggleBookmark(selectedJob)}>
        {bookmarkedJobs.some((savedJob) => savedJob.id === selectedJob.id)
          ? "Remove Bookmark"
          : "Bookmark Job"}
      </button>

      <h2>{selectedJob.title}</h2>
      <p>{selectedJob.company}</p>
      <p>{selectedJob.location}</p>

      {selectedJob.remote && <p>Remote</p>}

      <div>
        {selectedJob.jobTypes.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: selectedJob.description,
        }}
      />

      <a href={selectedJob.url} target="_blank" rel="noreferrer">
        Apply for this selectedJob
      </a>
    </div>
  );
};

export default JobModal;

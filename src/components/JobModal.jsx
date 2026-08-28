import { X, MapPin, Check, Bookmark, ExternalLink } from "lucide-react";
import DOMPurify from "dompurify";

const JobModal = ({ selectedJob, onClose, bookmarkedJobs, toggleBookmark }) => {
  if (!selectedJob) return null;

  const isBookmarked = bookmarkedJobs.some(
    (savedJob) => savedJob.id === selectedJob.id,
  );

  const getAvatarBg = (company = "") => {
    const colors = [
      "bg-emerald-500 text-black",
      "bg-indigo-500 text-white",
      "bg-amber-500 text-black",
      "bg-rose-500 text-white",
      "bg-sky-500 text-black",
      "bg-purple-500 text-white",
    ];
    const charCode = company.charCodeAt(0) || 0;
    return colors[charCode % colors.length];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close job details"
          className="absolute right-5 top-5 rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Company Avatar & Details */}
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${getAvatarBg(
              selectedJob.company,
            )}`}
          >
            {selectedJob.company
              ? selectedJob.company.charAt(0).toUpperCase()
              : "J"}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-400">
              {selectedJob.company}
            </p>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {selectedJob.title}
            </h2>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {selectedJob.location && (
            <span className="inline-flex items-center gap-1 rounded-md border border-gray-800 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-300">
              <MapPin className="h-3 w-3 text-gray-400" />
              {selectedJob.location}
            </span>
          )}

          {selectedJob.remote && (
            <span className="rounded-md bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-200">
              Remote
            </span>
          )}

          {selectedJob.jobTypes?.map((type) => (
            <span
              key={type}
              className="rounded-md border border-gray-800 bg-gray-900 px-2.5 py-1 text-xs font-medium text-gray-400"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Description Body */}
        <div className="mt-6 max-h-60 overflow-y-auto pr-2 text-sm leading-relaxed text-gray-300 custom-scrollbar">
          {selectedJob.description ? (
            selectedJob.description.startsWith("<") ? (
              <div
                className="job-description"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(selectedJob.description),
                }}
              />
            ) : (
              <p>{selectedJob.description}</p>
            )
          ) : (
            <p className="text-gray-500">No description available.</p>
          )}
        </div>

        <hr className="my-6 border-gray-900" />

        {/* Modal Action Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => toggleBookmark(selectedJob)}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition ${
              isBookmarked
                ? "border-gray-700 bg-gray-900 text-white"
                : "border-gray-800 bg-gray-950 text-gray-300 hover:bg-gray-900 hover:text-white"
            }`}
          >
            {isBookmarked ? (
              <>
                <Check className="h-4 w-4" />
                Saved
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4" />
                Save job
              </>
            )}
          </button>

          {selectedJob.url && (
            <a
              href={selectedJob.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-gray-200"
            >
              Apply on {selectedJob.company || "site"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobModal;

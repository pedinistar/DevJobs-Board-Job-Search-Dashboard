import { MapPin, Bookmark } from "lucide-react";

const JobCard = ({ job, onClick, isBookmarked, onToggleBookmark }) => {
  // Generate consistent initial avatar background color based on company name
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

  const handleBookmarkClick = (e) => {
    e.stopPropagation(); // Prevents opening the job modal when clicking bookmark
    onToggleBookmark(job);
  };

  return (
    <article
      onClick={onClick}
      className="group relative flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-950 p-6 shadow-sm transition hover:border-gray-700 hover:shadow-md cursor-pointer"
    >
      <div>
        {/* Top Header: Avatar & Bookmark Toggle */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold ${getAvatarBg(
              job.company,
            )}`}
          >
            {job.company ? job.company.charAt(0).toUpperCase() : "J"}
          </div>

          <button
            onClick={handleBookmarkClick}
            className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-800 hover:text-white"
            aria-label={isBookmarked ? "Remove Bookmark" : "Bookmark Job"}
          >
            <Bookmark
              className={`h-4 w-4 ${
                isBookmarked ? "fill-white text-white" : ""
              }`}
            />
          </button>
        </div>

        {/* Company & Job Title */}
        <p className="text-xs font-medium text-gray-400">{job.company}</p>
        <h2 className="mt-1 text-base font-semibold text-white group-hover:text-gray-200">
          {job.title}
        </h2>

        {/* Badges: Location, Remote, Job Types */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {job.location && (
            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
              <MapPin className="h-3 w-3" />
              {job.location}
            </span>
          )}

          {job.remote && (
            <span className="rounded-md bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-200">
              Remote
            </span>
          )}

          {job.jobTypes?.map((type) => (
            <span
              key={type}
              className="rounded-md bg-gray-900 px-2 py-0.5 text-xs font-medium text-gray-400 border border-gray-800"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Description Snippet */}
        <p className="mt-4 line-clamp-2 text-xs leading-relaxed text-gray-400">
          {job.description}
        </p>
      </div>

      {/* Footer: Date posted & Action button */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-900 pt-4">
        <span className="text-xs text-gray-500">
          {job.postedAt || "Posted recently"}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="rounded-lg border border-gray-800 bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-200 transition hover:bg-gray-800 hover:text-white"
        >
          View details
        </button>
      </div>
    </article>
  );
};

export default JobCard;

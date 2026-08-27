const JobCard = ({ job }) => {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {job.company}
        </p>

        <h2 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
          {job.title}
        </h2>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          {job.location}
        </span>

        {job.remote && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400">
            Remote
          </span>
        )}

        {job.jobTypes.map((type) => (
          <span
            key={type}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
          >
            {type}hi
          </span>
        ))}
      </div>

      <p className="line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
        {job.description}
      </p>
    </article>
  );
};

export default JobCard;

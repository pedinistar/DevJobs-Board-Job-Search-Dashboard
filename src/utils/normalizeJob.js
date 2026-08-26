export function normalizeJob(job) {
  return {
    id: job.slug,
    title: job.title,
    company: job.company_name,
    description: job.description,
    location: job.location || "Location not specified",
    remote: job.remote,
    jobTypes: job.job_types || [],
    tags: job.tags || [],
    url: job.url,
    createdAt: job.created_at,
  };
}

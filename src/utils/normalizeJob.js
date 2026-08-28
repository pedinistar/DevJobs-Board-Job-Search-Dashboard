function normalizeJobTypes(jobTypes) {
  if (!Array.isArray(jobTypes)) {
    return [];
  }

  const types = jobTypes.map((type) => String(type).toLowerCase());

  const result = [];

  if (types.some((type) => type.includes("full"))) {
    result.push("Full Time");
  }

  if (types.some((type) => type.includes("part"))) {
    result.push("Part Time");
  }

  if (types.some((type) => type.includes("intern"))) {
    result.push("Internship");
  }

  if (types.some((type) => type.includes("contract"))) {
    result.push("Contract");
  }

  if (types.some((type) => type.includes("freelance"))) {
    result.push("Freelance");
  }

  return result;
}

export function normalizeJob(job) {
  const rawJobTypes = Array.isArray(job.job_types)
    ? job.job_types
    : job.job_types
      ? Object.values(job.job_types)
      : [];

  return {
    id: job.slug,
    title: job.title || "Untitled role",
    company: job.company_name || "Unknown company",
    description: job.description || "No description available.",
    location: job.location || "Location not specified",
    remote: Boolean(job.remote),
    jobTypes: normalizeJobTypes(rawJobTypes),
    tags: Array.isArray(job.tags) ? job.tags : [],
    url: job.url || "",
    createdAt: job.created_at,
  };
}

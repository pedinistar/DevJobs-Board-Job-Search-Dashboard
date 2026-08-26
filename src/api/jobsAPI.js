const BASE_URL = "https://www.arbeitnow.com/api/job-board-api";

export async function fetchJobs(page = 1) {
  const response = await fetch(`${BASE_URL}?page=${page}`);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
}

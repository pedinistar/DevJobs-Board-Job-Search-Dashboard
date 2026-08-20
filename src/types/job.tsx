export type JobDataTypes = {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
};

export type FetchState =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; data: JobDataTypes[] }
  | { state: "error"; error: string };

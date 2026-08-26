import { useEffect } from "react";
import { fetchJobs } from "./api/jobsAPI";

const App = () => {
  useEffect(() => {
    async function loadJobs() {
      const data = await fetchJobs();

      console.log(data);
      console.log(data.data);
    }

    loadJobs();
  }, []);
  return <h1>DevJobs Board</h1>;
};

export default App;

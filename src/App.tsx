import { useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import JobsList from "./components/JobsList";
import { Separator } from "@/components/ui/separator";
import type { FetchState } from "./types/job";

export default function App() {
  const [state, setState] = useState<FetchState>({ state: "idle" });

  state.state === "loading" && <Loading />;

  return (
    <div>
      <Header />
      <JobDetails />
      <Separator />
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
        <Filter />
        <JobsList />
      </div>
    </div>
  );
}

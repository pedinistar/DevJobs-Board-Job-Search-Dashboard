import Filter from "./components/Filter";
import Header from "./components/Header";
import JobsList from "./components/JobsList";
import { Separator } from "@/components/ui/separator";

export default function App() {
  return (
    <div>
      <Header />
      <Separator />
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
        <Filter />
        <JobsList />
      </div>
    </div>
  );
}

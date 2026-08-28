import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search job title or company..."
        className="w-full rounded-lg border border-gray-800 bg-gray-950 py-2.5 pl-10 pr-12 text-sm text-gray-200 placeholder-gray-500 transition focus:border-gray-700 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;

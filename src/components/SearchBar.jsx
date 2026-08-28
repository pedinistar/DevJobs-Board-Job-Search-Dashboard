import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Cmd + K (Mac) or Ctrl + K (Windows)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search job title or company..."
        className="w-full rounded-lg border border-gray-800 bg-gray-950 py-2.5 pl-10 pr-12 text-sm text-gray-200 placeholder-gray-500 transition focus:border-gray-700 focus:outline-none"
      />
      <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 items-center rounded border border-gray-800 bg-gray-900 px-1.5 py-0.5 text-[10px] font-medium text-gray-400">
        ⌘ K
      </div>
    </div>
  );
};

export default SearchBar;

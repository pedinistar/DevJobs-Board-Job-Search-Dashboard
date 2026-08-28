import { Filter, MapPin, ChevronDown } from "lucide-react";

const Filters = ({
  isRemote,
  setIsRemote,
  selectedLocation,
  setSelectedLocation,
  locations,
  selectedJobType,
  setSelectedJobType,
  clearFilters,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <Filter className="h-4 w-4" />
        <span>Filter jobs</span>
      </div>

      {/* Location Filter */}
      <div className="flex flex-col gap-2">
        <label htmlFor="location" className="text-xs font-medium text-gray-400">
          Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full appearance-none rounded-lg border border-gray-800 bg-gray-950 py-2.5 pl-9 pr-8 text-sm text-gray-200 transition focus:border-gray-700 focus:outline-none"
          >
            <option value="">Any location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Remote Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">Remote only</span>
        <button
          type="button"
          role="switch"
          aria-checked={isRemote}
          onClick={() => setIsRemote(!isRemote)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            isRemote ? "bg-white" : "bg-gray-800"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-black shadow transition duration-200 ease-in-out ${
              isRemote ? "translate-x-5 bg-black" : "translate-x-0 bg-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Job Type Filter */}
      <div className="flex flex-col gap-2">
        <label htmlFor="jobType" className="text-xs font-medium text-gray-400">
          Job type
        </label>
        <div className="relative">
          <select
            id="jobType"
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="w-full appearance-none rounded-lg border border-gray-800 bg-gray-950 py-2.5 pl-3 pr-8 text-sm text-gray-200 transition focus:border-gray-700 focus:outline-none"
          >
            <option value="">All types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Clear All */}
      <div>
        <button
          onClick={clearFilters}
          className="text-xs text-gray-400 underline-offset-4 transition hover:text-white hover:underline"
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Filters;

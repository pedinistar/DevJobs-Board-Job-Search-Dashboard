import { Briefcase, Sun, Bookmark } from "lucide-react";

const Navbar = ({ showBookmarks, setShowBookmarks, bookmarkedCount }) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 bg-black/40 px-6 py-4 backdrop-blur-md">
      {/* Left: Brand Logo */}
      <div
        className="flex cursor-pointer items-center gap-3"
        onClick={() => setShowBookmarks(false)}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
          <Briefcase className="h-5 w-5" />
        </div>
        <span className="text-base font-semibold text-white">
          DevJobs Board
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setShowBookmarks(!showBookmarks)}
          className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
        >
          <Bookmark
            className={`h-4 w-4 ${showBookmarks ? "fill-current" : ""}`}
          />
          <span>Saved jobs</span>
          <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs font-semibold text-gray-300">
            {bookmarkedCount}
          </span>
        </button>

        <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
          <Sun className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

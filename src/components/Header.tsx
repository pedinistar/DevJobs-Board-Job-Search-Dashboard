import Search from "./Search";

export default function Header() {
  return (
    <header className="flex gap-4 items-center p-4">
      <h1>Job Board</h1>
      <Search />
    </header>
  );
}

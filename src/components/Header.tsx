import Search from "./Search";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1>Job Board</h1>
      <Search />
    </header>
  );
}

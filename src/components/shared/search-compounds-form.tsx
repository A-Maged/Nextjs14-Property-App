import { FaSearch } from "react-icons/fa";

export function SearchCompoundsForm() {
  return (
    <form className="relative flex gap-3" action="/search">
      <button className="absolute left-[12px] top-[20px]" type="submit">
        <FaSearch className="fill-gray-400 text-xl" />
      </button>

      <input
        name="q"
        placeholder="search"
        className="mt-1 block h-full w-full rounded-md border-[1px] border-gray-500 py-4 pl-10 text-black"
      />
    </form>
  );
}

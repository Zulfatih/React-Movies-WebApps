const SearchBar = () => {
  return (
    <div className="absolute w-screen h-[46px] left-1/2 -translate-x-1/2 -bottom-4 px-4 md:px-10 md:py-20">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="absolute w-full h-[46px] bottom-0 rounded-3xl px-5 outline-none"
        />
        <button className="absolute w-[100px] h-[46px] -bottom-0 bg-sky-600 text-white right-0 rounded-3xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

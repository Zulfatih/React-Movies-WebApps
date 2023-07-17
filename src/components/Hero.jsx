import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-screen h-[300px] relative md:h-[360px]">
      <img
        src="https://picsum.photos/1920/1080"
        alt=""
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute h-full w-full bg-sky-900 bg-opacity-80 pl-3 md:px-8 md:py-10 ">
      <div className="mx-2 my-4">
          <h2 className="font-bold text-[42px] text-white">Welcome.</h2>
          <h3 className="font-semibold text-[28px] text-white ">
            Millions of movies, TV shows and people to discover. Explore now!
          </h3>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;

const Card = () => {
  const rating = 88;
  return (
    <div className="w-[150px] h-max bg-white overflow-hidden rounded-md relative">
      <img
        src="https://picsum.photos/150/225"
        alt=""
        className="w-[150px] h-[225px] object-cover rounded-md"
      />
      <div className="rounded-full bg-gray-900 w-[38px] h-[38px] absolute translate-x-3 -translate-y-5">
        <h1 className="text-white text-[10px] grid place-content-center w-[38px] h-[38px] font-bold">
          {`${rating}%`}
        </h1>
      </div>
      <div className="px-3 py-4 overflow-hidden">
        <h1 className="font-bold text-base my-1">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-sm text-gray-600">Lorem ipsum.</p>
      </div>
    </div>
  );
};

export default Card;

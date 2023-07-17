import Card from "./Card";

const CardList = (props) => {
  return (
    <div className="my-8 ">
      <h2 className="font-semibold text-[22px] pl-5 pb-4 md:pl-10">
        {props.header}
      </h2>
      <div className="grid grid-flow-col gap-5 overflow-scroll pl-5 md:pl-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;

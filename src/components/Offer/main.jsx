import selection from "../../assets/imgs/selection.png";
import Card from "./Card";
const Main = () => {
  return (
    <>
      <div className="w-full text-center font-semibold text-[30px] text-white my-2">
        Token List
      </div>
      <div className="flex flex-wrap space-x-5 xs:space-y-3 w-full justify-center">
        <div className="bg-[#363A41] flex justify-center py-2 border border-[#969696] rounded-[5px] text-white px-3 lg:w-1/4 md:w-1/4 sm:w-1/2 xs:w-full min-w-[400px]">
          <div className="font-medium py-1 px-5 hover:cursor-pointer">Buy</div>
          <hr />
          <div className="font-medium py-1 px-5 opacity-50 hover:cursor-pointer">
            Sell
          </div>
          <hr />
          <div className="font-medium py-1 px-5 opacity-50 hover:cursor-pointer">
            100% Filled
          </div>
          <hr />
          <div className="font-medium py-1 px-5 opacity-50 hover:cursor-pointer">
            Closed
          </div>
        </div>
        <div className="bg-[#363A41] p-3 pr-6 flex justify-center items-center border border-[#969696] rounded-[5px] text-white hover:cursor-pointer lg:w-1/6 md:w-1/6 sm:w-full min-w-[200px]">
          <img
            className="w-[15px] h-[15px]"
            src={selection}
            alt="selection.png"
          />
          <div className="ml-2 opacity-50">Select All List</div>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5 ">
        <Card percentage={2} />
        <Card percentage={2} />
        <Card percentage={80} />
        <Card percentage={20} />
        <Card percentage={2} />
        <Card percentage={2} />
        <Card percentage={2} />
        <Card percentage={2} />
        <Card percentage={2} />
        <Card percentage={2} />
      </div>
    </>
  );
};

export default Main;

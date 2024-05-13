import logo from "../../../assets/imgs/logo.png";
import search from "../../../assets/imgs/search.png";
import sort from "../../../assets/imgs/sort.png";
import sortalt from "../../../assets/imgs/Sort-alt.png";
import refresh from "../../../assets/imgs/refresh.png";
import CustomConnectButton from "../../connectButton/connectButton";

const Header = () => {
  return (
    <div className=" fixed top-0 right-0 flex justify-between items-center w-full h-[103px] bg-black pt-9 pb-7 pl-7 pr-[70px] border-b-[1px] border-[#969696] z-10">
      <div className="flex items-center space-x-7">
        <img src={logo} alt="logo.png" className="w-[206px] h-[40px]" />
        <div className="flex items-center space-x-2.5 h-[39px]">
          <div className="w-[506px] h-[39px] flex items-center bg-[#363A41] border border-[#969696] p-3 rounded-[5px]">
            <input
              className="flex-1 w-0 bg-[#363A41] border-none focus:outline-none text-white text-xs"
              placeholder="Enter the token name"
            />
            <div className="bg-[#969696] border border-[#969696] px-[7px] py-[5px] flex justify-center items-center text-white rounded-[5px] hover:cursor-pointer hover:bg-slate-600">
              <img src={search} alt="logo.png" className="w-[11px] h-2.5" />
            </div>
          </div>
          <div className="h-[39px] bg-[#363A41] border border-[#969696] p-3 flex items-center text-white rounded-md text-xs hover:cursor-pointer hover:bg-slate-600">
            <img src={sort} alt="sort.png" />
            <span className="ml-1">Filter</span>
          </div>
          <div className="h-[39px] bg-[#363A41] border border-[#969696] p-3 flex justify-center items-center text-white rounded-md text-xs hover:cursor-pointer hover:bg-slate-600">
            <img src={sortalt} alt="sortalt.png" />
            <span className="ml-1">Price: Ascending</span>
          </div>
          <div className="w-[42px] h-[39px] bg-[#363A41] border border-[#969696] rounded-md p-3 flex justify-center items-center text-xs hover:cursor-pointer hover:bg-slate-600">
            <img src={refresh} alt="refresh.png" />
          </div>
        </div>
      </div>

      <CustomConnectButton />
    </div>
  );
};

export default Header;

import chart_mixed from "../../../assets/imgs/Chart_Mixed.png";
import { Link } from "react-router-dom";

import SidebarContent from "./sidebarContent";
const Sidebar = () => {
  return (
    <div className="fixed top-[103px] left-0 w-[257px] h-screen pl-[14px] pr-3.5 pt-5 bg-[#101116] shadow-cs z-10 z-[1]git overflow-hidden ">
      <SidebarContent img={chart_mixed} />
      <SidebarContent img={chart_mixed} />
      <SidebarContent img={chart_mixed} />
      <Link className="w-full pl-[9px] pr-[17px] py-[10px] text-[14px] text-white flex items-center rounded-[5px] hover:bg-slate-800 hover:cursor-pointer" to="/createOffer">
        <p className=" opacity-50">+ Create Offer</p>
      </Link>
    </div>
  );
};

export default Sidebar;

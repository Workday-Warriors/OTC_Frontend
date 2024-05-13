import { Link } from "react-router-dom";
import token from "../../../assets/imgs/logo 20.png";
import "./card.css";
// import Progress from "./progress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Card = ({ percentage }) => {
  return (
    <div className="bg-cs rounded-[5px]">
      <div className="w-full p-4">
        <div className="flex justify-between w-full mb-6">
          <div className="w-1/2 flex justify-start text-[#EFEFEF] drop-shadow-cs mb-2">
            <img src={token} alt="token.png" className="w-[22px] h-[30px]" />
            <div className="ml-3 text-sm">MACH7</div>
          </div>
          <div className="w-9 h-9">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}`}
              styles={buildStyles({
                textSize: "30px",
                textColor: "white",
                trailColor: "black",
              })}
            />
          </div>
        </div>
        <div className="flex justify-between text-sm text-[#EFEFEF] drop-shadow-cs mt-2 font-medium">
          <div>Offering</div>
          <div className="w-[100px] text-left">0.000458 ETH</div>
        </div>
        <div className="flex justify-between text-sm text-[#EFEFEF] drop-shadow-cs mt-2 font-medium">
          <div>for</div>
          <div className="w-[100px] text-left">100</div>
        </div>
        <div className="flex justify-between text-sm text-[#EFEFEF] drop-shadow-cs mt-2 font-medium">
          <div>Token</div>
          <div className="w-[100px] text-left">0.495ETH</div>
        </div>
        <div className="flex justify-between text-sm text-[#EFEFEF] drop-shadow-cs mt-2 font-medium">
          <div>Offer Price</div>
          <div className="w-[100px] text-left">$0.00553</div>
        </div>
      </div>
      <div className="flex w-full text-[#efefef]">
        <Link className="w-1/2 flex justify-center items-center px-6 py-4 shadow-btn font-medium hover:cursor-pointer" to="/offerDetails">
          View Details
        </Link>
        <div className="w-1/2 flex justify-center items-center px-6 py-4 shadow-btn font-medium hover:cursor-pointer">
          Buy Now
        </div>
      </div>
    </div>
  );
};

export default Card;

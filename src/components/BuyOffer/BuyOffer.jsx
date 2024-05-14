import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Select } from './Components/Select/Select';
import { LineStep } from './Components/LineStep/LineStep';
import { MyOrders } from './Components/MyOrders /MyOrders';
import logo from "../../../src/assets/imgs/logo.png";
import { IoIosClose } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Tokens } from './Components/Tokens/Tokens';
import { About } from './Components/About/About';
import { useNavigate } from 'react-router-dom';


export const BuyOffer = () => {

  const navigate = useNavigate()

  return <div className='pb-40 w-full'>
    <div className='w-full bg-[#15161B]' >
      <div className='flex py-[30px] px-[36px]' >
        <div className=' w-1/2 pr-[27px] border-r border-[#fff]' >
          <div className='flex gap-x-[116px]' >
            <div>
              <h1 className='text-[#EFEFEF] text-base not-italic font-medium leading-[normal]' >MACH7/ USDC</h1>
              <p className='mt-1 text-[rgba(255,255,255,0.50)] text-[10px] not-italic font-normal leading-[normal]' >
                $ 2.003 2.003 USDC
              </p>
            </div>
            <button className='flex py-2 px px-3 rounded-[4px] bg-[#181A1C] items-center gap-x-2 text-[rgba(255,255,255,0.60)] text-[10px] not-italic font-normal leading-[normal]' >
              <AiOutlineExclamationCircle />
              Offer Info
            </button>
          </div>
          <div className='mt-[20px] flex flex-col gap-y-[16px]' >
            <Select
              label='Selling'
            />
            <Select
              label='Collateral'
            />
          </div>
          <div className='mt-[50px]' >
            <LineStep />
          </div>
          <button className='py-[17px] w-full bg-[#101116] mt-[26px] text-white text-xs not-italic font-normal leading-[normal]' >
            Sell Now
          </button>
          <div className='mt-[9px]' >
            <div className='flex justify-between' >
              <p className='text-white text-xs not-italic font-light leading-[normal]' > Selling</p>
              <p className='text-[#9B9DA0] text-[10px] not-italic font-normal leading-[normal]' >2000</p>
            </div>
            <div className='flex mt-[9px] justify-between' >
              <p className='text-white text-xs not-italic font-light leading-[normal]' > Collateral</p>
              <p className='text-[#9B9DA0] text-[10px] not-italic font-normal leading-[normal]' >3500</p>
            </div>
          </div>
          <div className='w-full h-[0.2px] bg-white mt-[15px]' />
          <MyOrders />
        </div>
        <div className='w-1/2 px-10 py-[17px]' >
          <div className='flex  justify-between' >
            <img src={logo} alt="logo.png" className="w-[206px] h-[40px]" />
            <div className='flex  gap-x-[6px]' >
              <button className=' text-[#ffffff7f] rounded-[4px] bg-[#181A1C] w-[39px] h-[34px] flex justify-center items-center' >
                <IoIosClose />
              </button>
              <button className='text-[#ffffff7f] rounded-[4px] bg-[#181A1C] w-[39px] h-[34px] flex justify-center items-center' >
                <TfiWorld />
              </button>
              <button className='text-white rounded-[4px] bg-[#181A1C] w-[39px] h-[34px] flex justify-center items-center' >
                <TiArrowForwardOutline />
              </button>
            </div>
          </div>
          <div className='py-[27px] border-b-[0.5px] border-b-white'  >
            <Tokens />
          </div>
          <div className='pt-[13px]' >
            <About />
            <button onClick={() => navigate("/offer-step")} className='py-[17px] w-full bg-[#101116] cursor-pointer mt-[48px] text-white text-xs not-italic font-normal leading-[normal]' >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}
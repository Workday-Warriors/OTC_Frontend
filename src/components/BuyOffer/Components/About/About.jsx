/* eslint-disable react/prop-types */
const AboutElement = ({ title, description }) => {
  return <div className='flex justify-between' >
    <p className='text-white text-[10px] not-italic font-normal leading-[normal]'>
      {title}
    </p>
    <p className='text-white text-[10px] not-italic font-normal leading-[normal]'>
      {description}
    </p>
  </div>
}
export const About = () => {
  return <div className='flex  flex-col gap-y-[21px]' >
    <AboutElement title={"Offer ID:"} description={"0x9bc838....B4677759"} />
    <AboutElement title={"Creator:"} description={"19"} />
    <AboutElement title={"Offering:"} description={"Oxe369fe...f339f03a"} />
    <AboutElement title={"For:"} description={"0.009949 ETH"} />
    <AboutElement title={"Offer Price:"} description={"37 XYZ"} />
    <AboutElement title={"Price Difference:"} description={"0.0006633 ETH"} />
    <AboutElement title={"Market ETH/DAI:"} description={"0.0006633 ETH"} />
    <AboutElement title={"Market Price:"} description={"0.0006633 ETH"} />
    <AboutElement title={"Minimum Fill:"} description={"0.0006633 ETH"} />
  </div>
}